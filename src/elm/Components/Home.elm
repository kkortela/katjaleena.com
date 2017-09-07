module Components.Home exposing (home)

import TileData exposing (ammaData, instashopData, dignityMealsData, weddingData, TileData)
import Msgs exposing (Msg)
import Html exposing (..)
import Html.Attributes exposing (..)
import Routing exposing (parseLocation, onLinkClick, homePath, aboutPath)


home : Html Msg
home =
    div [ class "home" ]
        [ cover
        , intro "small"
        , cases
        ]


cover : Html Msg
cover =
    div [ class "cover" ]
        [ intro "large" ]


intro : String -> Html Msg
intro size =
    div [ class ("intro " ++ size) ]
        [ h1 [] [ text welcomeText ]
        , p [] [ text introText ]
        ]


cases : Html Msg
cases =
    div [ class "cases" ]
        [ h1 [] [ text "My Work" ]
        , div [ class "pure-g" ]
            [ tile ammaData
            , tile instashopData
            , tile dignityMealsData
            , tile weddingData
            ]
        ]


tile : TileData -> Html Msg
tile { url, imgSrc, title, desc } =
    div [ class "wrapper pure-u-1 pure-u-lg-1-2 pure-u-xl-1-4" ]
        [ a [ href url, onLinkClick (Msgs.ChangeLocation url) ]
            [ img [ src imgSrc ] []
            , div [ class "textContent" ]
                [ div []
                    [ h2 [] [ text title ]
                    , p [] [ text desc ]
                    ]
                ]
            ]
        ]


welcomeText : String
welcomeText =
    "Welcome!"


introText : String
introText =
    "I’m Katja, a UX/UI designer, who designs for a reason and wants to improve people’s lives."
