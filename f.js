{
    "description": "istrendzone as 1 with other  boolean attribute as 1",
    "options": {
        "type": "column3d",
        "width": "450",
        "height": "300",
        "dataFormat": "json",
        "dataSource": {
            "chart": {
                "caption": "Monthly",
                "xaxisname": "Month",
                "yaxisname": "Revenue",
                "numberprefix": "$",
                "showvalues": "1",
                "animation": "0",
                "trendValueFont": "Arial",
                "trendValueFontSize": "30",
                "trendValueFontBold": "1",
                "trendValueFontItalic": "1",
                "trendValueBgColor": "#CCFFFF",
                "trendValueBorderColor": "#6699FF",
                "trendValueAlpha": "100",
                "trendValueBgAlpha": "100",
                "trendValueBorderAlpha": "50",
                "trendValueBorderPadding": "8",
                "trendValueBorderRadius": "1",
                "trendValueBorderThickness": "5",
                "trendValueBorderDashed": "1",
                "trendValueBorderDashLen": "10"
            },
            "data": [
                {
                    "label": "Jan",
                    "value": "420000"
                },
                {
                    "label": "Feb",
                    "value": "910000"
                },
                {
                    "label": "Mar",
                    "value": "720000"
                },
                {
                    "label": "Apr",
                    "value": "550000"
                },
                {
                    "label": "May",
                    "value": "810000"
                },
                {
                    "label": "Jun",
                    "value": "510000"
                },
                {
                    "label": "Jul",
                    "value": "680000"
                },
                {
                    "label": "Aug",
                    "value": "620000"
                },
                {
                    "label": "Sep",
                    "value": "610000"
                },
                {
                    "label": "Oct",
                    "value": "490000"
                },
                {
                    "label": "Nov",
                    "value": "530000"
                },
                {
                    "label": "Dec",
                    "value": "330000"
                }
            ],
            "trendlines": [
                {
                    "line": [
                        {
                            "startvalue": "450000",
                            "endvalue": "550000",
                            "color": "#1aaf5d",
                            "isTrendZone": "1",
                            "valueOnRight": "1",
                            "showOnTop": "1",
                            "thickness": "4",
                            "alpha": "100",
                            "dashed": "1",
                            "dashlen": "12",
                            "dashGap": "9",
                            "displayvalue": "Monthly Target",
                            "tooltext": "123456"
                        },
                        {
                            "startvalue": "900000",
                            "color": "#1aaf5d",
                            "isTrendZone": "1",
                            "valueOnRight": "0",
                            "showOnTop": "1",
                            "thickness": "5",
                            "alpha": "10",
                            "dashed": "1",
                            "dashlen": "10",
                            "dashGap": "15",
                            "displayvalue": "Monthly Target",
                            "tooltext": "nice day"
                        }
                    ]
                }
            ]
        }
    },
    "refimage": "./tests/smoke/trendlines/column3d/ref-images/trendlines_col3d_4-snapshot.png",
    "id": "trendlines_col3d_4"
}