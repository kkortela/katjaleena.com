module Components.Header exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Msgs exposing (Msg)
import Routing exposing (parseLocation, onLinkClick, homePath, aboutPath, workPath)


navBar : Html Msg
navBar =
    div [ class "header" ]
        [ a [ class "logo", href homePath, onLinkClick (Msgs.ChangeLocation homePath) ]
            [ img [ src "static/img/katjaleena-logo.png" ] []
            ]
        , div [ class "nav" ]
            [ ul []
                [ li []
                    [ a [ class "link", href workPath, onLinkClick (Msgs.ChangeLocation workPath) ]
                        [ text "My Work"
                        ]
                    ]
                , li []
                    [ a [ class "link", href aboutPath, onLinkClick (Msgs.ChangeLocation aboutPath) ]
                        [ text "About Me"
                        ]
                    ]
                ]
            ]
        ]
