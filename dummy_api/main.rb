require 'sinatra'

get '/insight_weather' do
  content_type :json
  {
    "815": {
      "First_UTC": "2021-03-12T14:54:38Z",
      "Last_UTC": "2021-03-13T15:34:09Z",
      "Month_ordinal": 12,
      "Northern_season": "late winter",
      "PRE": {
        "av": 728.378,
        "ct": 153082,
        "mn": 708.4211,
        "mx": 744.9279
      },
      "Season": "winter",
      "Southern_season": "late summer",
      "WD": {
        "most_common": nil
      }
    },
    "818": {
      "First_UTC": "2021-03-15T20:01:49Z",
      "Last_UTC": "2021-03-16T17:32:54Z",
      "Month_ordinal": 12,
      "Northern_season": "late winter",
      "PRE": {
        "av": 727.696,
        "ct": 109855,
        "mn": 710.223,
        "mx": 743.946
      },
      "Season": "winter",
      "Southern_season": "late summer",
      "WD": {
        "most_common": nil
      }
    },
    "819": {
      "First_UTC": "2021-03-15T20:01:49Z",
      "Last_UTC": "2021-03-16T17:32:54Z",
      "Month_ordinal": 12,
      "Northern_season": "late winter",
      "PRE": {
        "av": 727.696,
        "ct": 109855,
        "mn": 710.223,
        "mx": 743.946
      },
      "Season": "winter",
      "Southern_season": "late summer",
      "WD": {
        "most_common": nil
      }
    },
    "820": {
      "First_UTC": "2021-03-15T20:01:49Z",
      "Last_UTC": "2021-03-16T17:32:54Z",
      "Month_ordinal": 12,
      "Northern_season": "late winter",
      "PRE": {
        "av": 727.696,
        "ct": 109855,
        "mn": 710.223,
        "mx": 743.946
      },
      "Season": "winter",
      "Southern_season": "late summer",
      "WD": {
        "most_common": nil
      }
    },
    "821": {
      "First_UTC": "2021-03-15T20:01:49Z",
      "Last_UTC": "2021-03-16T17:32:54Z",
      "Month_ordinal": 12,
      "Northern_season": "late winter",
      "PRE": {
        "av": 727.696,
        "ct": 109855,
        "mn": 710.223,
        "mx": 743.946
      },
      "Season": "winter",
      "Southern_season": "late summer",
      "WD": {
        "most_common": nil
      }
    },
    "sol_keys": ["815", "818", "819", "820", "821"],
    "validity_checks": {
      "815": {
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
      }
    }
  }.to_json
end
