module Components.Footer exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)


footerLinks : Html a
footerLinks =
    div
        [ class "footer pure-g" ]
        [ link "https://fi.linkedin.com/in/katjakortelainen" "linkedin.svg"
        , link "https://www.behance.net/katjaleeena" "behance.svg"
        , link "https://twitter.com/katjaleeena" "twitter.svg"
        , link "https://github.com/kkortela" "github.svg"
        ]


link : String -> String -> Html a
link url imgUrl =
    div
        [ class "pure-u-1-4" ]
        [ a
            [ target "_blank"
            , href url
            , style [ ( "backgroundImage", "url(static/img/" ++ imgUrl ++ ")" ) ]
            ]
            []
        ]
