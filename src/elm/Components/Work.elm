module Components.Work exposing (work)

import TileData exposing (ammaData, instashopData, dignityMealsData, weddingData, TileData)
import Msgs exposing (Msg)
import Html exposing (..)
import Html.Attributes exposing (..)


work : Html Msg
work =
    div [ class "work" ]
        [ h1 [] [ text "My Work" ]
        , p [] [ text "Here’s some of my latest work" ]
        , div [ class "pure-g" ]
            (List.indexedMap tile tiles)
        ]


tile : Int -> TileData -> Html Msg
tile i { url, imgSrc, title, desc } =
    let
        isWide =
            i
                == 0
                || i
                == 3

        pureClasses =
            if isWide then
                "pure-u-lg-13-24 pure-u-xl-3-5"
            else
                "pure-u-lg-11-24 pure-u-xl-2-5"

        bgColor =
            if isWide then
                "lightBg"
            else
                "darkBg"

        classes =
            "wrapper pure-u-1 case-" ++ toString i ++ " " ++ pureClasses
    in
        div
            [ class classes ]
            [ a [ href url, class bgColor ]
                [ img [ src imgSrc ] []
                , div [ class "textContent" ]
                    [ h2 [] [ text title ]
                    , p [] [ text desc ]
                    ]
                ]
            ]


tiles : List TileData
tiles =
    [ ammaData
    , instashopData
    , dignityMealsData
    , weddingData
    ]
