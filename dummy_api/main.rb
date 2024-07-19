require 'sinatra'
require 'rack/cors'

use Rack::Cors do
  allow do
    origins 'http://localhost:3000'
    resource '*',
      headers: :any,
      methods: [:get, :post, :options]
  end
end

get '/' do
  haml :index
end

get '/insight_weather' do
  content_type :json
  {
    "817": {
      "First_UTC": "2024-07-11T14:54:38Z",
      "Last_UTC": "2024-07-12T15:34:09Z",
      "Month_ordinal": 12,
      "Northern_season": "late winter",
      "AT": {
        "av": -71.233,
        "ct": 326642,
        "mn": -101.024,
        "mx": -27.149
      },
      "PRE": {
        "av": 761.006,
        "ct": 163012,
        "mn": 742.149,
        "mx": 780.389
      },
      "HWS": {
        "av": 4.352,
        "ct": 153082,
        "mn": 0.156,
        "mx": 17.817
      },
      "Season": "winter",
      "Southern_season": "late summer",
      "WD": {
        "most_common": nil
      }
    },
    "818": {
      "First_UTC": "2024-07-12T20:01:49Z",
      "Last_UTC": "2024-07-13T17:32:54Z",
      "Month_ordinal": 12,
      "Northern_season": "late winter",
      "AT": {
        "av": -73.110,
        "ct": 308939,
        "mn": -99.021,
        "mx": -23.256
      },
      "PRE": {
        "av": 731.126,
        "ct": 147288,
        "mn": 731.106,
        "mx": 778.147
      },
      "HWS": {
        "av": 3.345,
        "ct": 122016,
        "mn": 0.176,
        "mx": 15.568
      },
      "Season": "winter",
      "Southern_season": "late summer",
      "WD": {
        "most_common": nil
      }
    },
    "819": {
      "First_UTC": "2024-07-13T20:01:49Z",
      "Last_UTC": "2024-07-14T17:32:54Z",
      "Month_ordinal": 12,
      "Northern_season": "late winter",
      "AT": {
        "av": -70.163,
        "ct": 357699,
        "mn": -100.013,
        "mx": -25.093
      },
      "PRE": {
        "av": 707.922,
        "ct": 186576,
        "mn": 750.098,
        "mx": 699.181
      },
      "HWS": {
        "av": 3.686,
        "ct": 125748,
        "mn": 0.076,
        "mx": 18.642
      },
      "Season": "winter",
      "Southern_season": "late summer",
      "WD": {
        "most_common": nil
      }
    },
    "820": {
      "First_UTC": "2024-07-14T20:01:49Z",
      "Last_UTC": "2024-07-15T17:32:54Z",
      "Month_ordinal": 12,
      "Northern_season": "late winter",
      "AT": {
        "av": -69.233,
        "ct": 336456,
        "mn": -124.524,
        "mx": -35.909
      },
      "PRE": {
        "av": 755.692,
        "ct": 158658,
        "mn": 708.768,
        "mx": 770.843
      },
      "HWS": {
        "av": 4.137,
        "ct": 136890,
        "mn": 0.105,
        "mx": 18.653
      },
      "Season": "winter",
      "Southern_season": "late summer",
      "WD": {
        "most_common": nil
      }
    },
    "821": {
      "First_UTC": "2024-07-15T20:01:49Z",
      "Last_UTC": "2024-07-16T17:32:54Z",
      "Month_ordinal": 12,
      "Northern_season": "late winter",
      "AT": {
        "av": -75.143,
        "ct": 345678,
        "mn": -113.624,
        "mx": -29.096
      },
      "PRE": {
        "av": 754.907,
        "ct": 165547,
        "mn": 730.987,
        "mx": 779.921
      },
      "HWS": {
        "av": 4.245,
        "ct": 159182,
        "mn": 0.203,
        "mx": 16.817
      },
      "Season": "winter",
      "Southern_season": "late summer",
      "WD": {
        "most_common": nil
      }
    },
    "822": {
      "First_UTC": "2024-07-16T20:01:49Z",
      "Last_UTC": "2024-07-17T17:32:54Z",
      "Month_ordinal": 12,
      "Northern_season": "late winter",
      "AT": {
        "av": -71.233,
        "ct": 326642,
        "mn": -101.024,
        "mx": -27.149
      },
      "PRE": {
        "av": 751.165,
        "ct": 158090,
        "mn": 739.058,
        "mx": 783.967
      },
      "HWS": {
        "av": 3.653,
        "ct": 123082,
        "mn": 0.170,
        "mx": 15.480
      },
      "Season": "winter",
      "Southern_season": "late summer",
      "WD": {
        "most_common": nil
      }
    },
    "823": {
      "First_UTC": "2024-07-17T20:01:49Z",
      "Last_UTC": "2024-07-18T17:32:54Z",
      "Month_ordinal": 12,
      "Northern_season": "late winter",
      "AT": {
        "av": -69.216,
        "ct": 318689,
        "mn": -111.421,
        "mx": -25.867
      },
      "PRE": {
        "av": 789.792,
        "ct": 180308,
        "mn": 728.808,
        "mx": 779.130
      },
      "HWS": {
        "av": 4.282,
        "ct": 15692,
        "mn": 0.186,
        "mx": 16.817
      },
      "Season": "winter",
      "Southern_season": "late summer",
      "WD": {
        "most_common": nil
      }
    },
    "sol_keys": ["817", "818", "819", "820", "821", "822", "823"],
    "validity_checks": {
      "817": {
        "PRE": {
          "sol_hours_with_data": [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23
          ],
          "valid": true
        }
      },
      "818": {
        "PRE": {
          "sol_hours_with_data": [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23
          ],
          "valid": true
        }
      },
      "819": {
        "PRE": {
          "sol_hours_with_data": [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23
          ],
          "valid": true
        }
      },
      "820": {
        "PRE": {
          "sol_hours_with_data": [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23
          ],
          "valid": true
        }
      },
      "821": {
        "PRE": {
          "sol_hours_with_data": [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23
          ],
          "valid": true
        }
      },
      "822": {
        "PRE": {
          "sol_hours_with_data": [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23
          ],
          "valid": true
        }
      },
      "823": {
        "PRE": {
          "sol_hours_with_data": [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23
          ],
          "valid": true
        }
      }
    }
  }.to_json
end

__END__

@@ layout
%html
  != yield

@@ index
%h1 Dummy API
%h2 It might not be pretty, but it's alive!
%p Head over to one of the following:
%ol
  %li
    %a{ href: '/insight_weather' } GET /insight_weather
