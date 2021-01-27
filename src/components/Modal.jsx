import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Overlay from "./Overlay";
import { usePx, useScrollLock } from "../hooks";

const HORIZONTAL_PIXEL_PADDING = 32; // each side
const VERTICAL_PIXEL_PADDING = 48; // each direction

function calculatePosition(triggerRef, scale) {
  // Retrieve element position and dimensions
  const triggerElement = triggerRef.current;
  if (triggerElement === null) {
    return [0, 0, 0, 0];
  }
  const { x, y, width, height } = triggerElement.getBoundingClientRect();

  // Retrieve window size
  const { innerWidth, innerHeight } = window;

  // Calculate total margins
  const totalHorizontalMargins = HORIZONTAL_PIXEL_PADDING * 2;
  const totalVerticalMargins = VERTICAL_PIXEL_PADDING * 2;

  // Calculate scaled width and height, clamped by the margins
  const calculatedWidth = Math.min(
    innerWidth - totalHorizontalMargins,
    width * scale
  );
  const calculatedHeight = Math.min(
    innerHeight - totalVerticalMargins,
    height * scale
  );

  // Calculate changes due to scaling, used for centering modal
  const deltaX = width * scale - width;
  const deltaY = height * scale - height;

  // Calculate the raw, unclamped x and y values; they are centered by subtracting half the change in x and y
  const rawX = x - deltaX / 2;
  const rawY = y - deltaY / 2;

  // Calculate x and y position, clamped by the margins on both sides
  const calculatedX = Math.max(
    Math.min(rawX, innerWidth - HORIZONTAL_PIXEL_PADDING - calculatedWidth),
    HORIZONTAL_PIXEL_PADDING
  );
  const calculatedY = Math.max(
    Math.min(rawY, innerHeight - VERTICAL_PIXEL_PADDING - calculatedHeight),
    VERTICAL_PIXEL_PADDING
  );

  // Return [top, left, width, height]
  return [calculatedY, calculatedX, calculatedWidth, calculatedHeight];
}

function usePositionCalculation(triggerRef, scale, show) {
  // Calculate initial values for state
  const [
    initialTop,
    initialLeft,
    initialWidth,
    initialHeight,
  ] = calculatePosition(triggerRef, scale);

  // Initialize state hooks
  const [top, setTop] = usePx(initialTop);
  const [left, setLeft] = usePx(initialLeft);
  const [width, setWidth] = usePx(initialWidth);
  const [height, setHeight] = usePx(initialHeight);

  // Watch the trigger element's position
  useEffect(() => {
    function handleReposition() {
      const [top, left, width, height] = calculatePosition(triggerRef, scale);

      setTop(top);
      setLeft(left);
      setWidth(width);
      setHeight(height);
    }

    window.addEventListener("scroll", handleReposition);
    window.addEventListener("resize", handleReposition);

    return () => {
      window.removeEventListener("scroll", handleReposition);
      window.removeEventListener("resize", handleReposition);
    };
  }, [triggerRef, scale, setTop, setLeft, setWidth, setHeight]);

  // Re-calculate the position when shown
  useEffect(() => {
    const [top, left, width, height] = calculatePosition(triggerRef, scale);

    setTop(top);
    setLeft(left);
    setWidth(width);
    setHeight(height);
  }, [triggerRef, scale, setTop, setLeft, setWidth, setHeight, show]);

  return [top, left, width, height];
}

function Modal({ triggerRef, scale, children, show, onClose }) {
  if (!triggerRef || !scale)
    throw new Error("Trigger ref and scale props must be set");

  // Calculate the modal position on resize and scroll
  const [top, left, width, height] = usePositionCalculation(
    triggerRef,
    scale,
    show
  );

  // Lock scroll when the modal is shown
  useScrollLock(show);

  const modalRef = useRef(null);
  function closeIfModalWasNotTarget(event) {
    const modalElement = modalRef.current;

    if (event.target !== modalElement && !modalElement.contains(event.target))
      onClose();
  }

  return (
    <Overlay active={show} onClick={closeIfModalWasNotTarget}>
      <div
        className="fixed bg-white p-10 shadow-2xl overflow-y-auto"
        style={{ top, left, width, height }}
        ref={modalRef}
      >
        <div className="flex flex-row-reverse">
          <button onClick={onClose}>&#x2715;</button>
        </div>
        {children}
      </div>
    </Overlay>
  );
}

Modal.propTypes = {
  triggerRef: PropTypes.object.isRequired,
  scale: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
