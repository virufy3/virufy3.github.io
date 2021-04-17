import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import HighMaps from "highcharts/highmaps";

import americalMap from "../script/maps/america-map";
import { countryCode } from "../script/maps/countriies";

// Service
import { getData } from "../services/CoughService";

class MapAmerica extends Component {
  constructor(props) {
    super(props);
    this.index = 2;
    this.state = {
      options: {
        title: {
          text: "",
        },
        chart: {
          spacingTop: 0,
          marginTop: 0,
          height: (9 / 16) * 100 + "%",
          spacingRight: 5,
          spacingBottom: 20,
          spacingLeft: 5,
          marginRight: 40,
          spacingLeft: 40,
        },
        responsives: {
          rules: [
            {
              condition: {
                minWidth: 600,
              },
              chartOptions: {
                legend: {
                  align: "center",
                  verticalAlign: "bottom",
                  layout: "horizontal",
                },
              },
            },
          ],
        },
        plotOptions: {
          map: {
            states: {
              hover: {
                color: "#00A788",
                enabled: false,
              },
            },
          },
        },
        colorAxis: {
          min: 0,
          minColor: "#E6E7E8",
          maxColor: "#00A788",
        },
        tooltip: {
          formatter: function (tooltip) {
            // if (this.point.isNull) {
            //     return 'Null';
            // }

            // return tooltip.defaultFormatter.call(this, tooltip);
            return `<b>${this.key}:</b> <br>
              Donated coughs <b>${this.point.value}</b> <br>`;
          },
        },
        legend: {
          // layout: "vertical",
          // align: "left",
          // verticalAlign: "middle"
          align: "center",
          verticalAlign: "bottom",
          layout: "horizontal",
        },
        credits: {
          enabled: false,
        },
        exporting: {
          enabled: false,
        },
        subtitle: {
          text: "",
          floating: true,
          align: "right",
          y: 50,
          style: {
            fontSize: "16px",
          },
        },
        series: [
          {
            mapData: americalMap,
            data: [],
            name: "",
            dataLabels: {
              enabled: false,
              format: "{point.name}",
            },
          },
        ],
        mapNavigation: {
          enabled: false,
          buttonOptions: {
            verticalAlign: "bottom",
          },
        },
      },
    };
  }

  dataToCountries = (data) => {
    return data.feed.entry
      .reduce((acc, item, i) => {
        if (i > 1) {
          if (i % 2 === 0) {
            return [
              ...acc,
              {
                name:
                  data.feed.entry[i].gs$cell.numericValue ||
                  data.feed.entry[i].gs$cell.$t,
                value: parseInt(data.feed.entry[i + 1].gs$cell.numericValue),
              },
            ];
          }
          return acc;
        }
        return acc;
      }, [])
      .map((item) => {
        if (countryCode[item.name]) {
          return [countryCode[item.name].toLowerCase(), item.value];
        } else {
          return [item.name, item.value];
        }
      });
  };
  async fetch() {
    const data = await getData();
    const countries = this.dataToCountries(data);

    const options = {
      ...this.state.options,
      series: [
        {
          ...this.state.options.series[0],
          data: countries,
        },
      ],
    };
    this.chart = new HighMaps["Map"](findDOMNode(this), options);
    setTimeout(this.fetch.bind(this), 10000); // Refresh data each 10 seconds
  }

  componentDidMount() {
    this.fetch(this);
  }

  componentWillUnmount() {
    this.chart && this.chart.destroy();
  }

  render() {
    return <div />;
  }
}

export default MapAmerica;
