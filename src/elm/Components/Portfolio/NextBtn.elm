module Components.Portfolio.NextBtn exposing (nextBtn)

import Msgs exposing (Msg)
import Html exposing (..)
import Html.Attributes exposing (..)


nextBtn : Maybe String -> Html Msg
nextBtn url =
    case url of
        Nothing ->
            text ""

        Just url ->
            a [ class "link", href url ]
                [ text "Next" ]
