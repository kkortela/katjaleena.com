module Components.Portfolio.Wrapper exposing (wrapper)

import Msgs exposing (Msg)
import Html exposing (..)
import Html.Attributes exposing (..)
import Components.Portfolio.NextBtn exposing (nextBtn)


wrapper : Maybe String -> List (Html Msg) -> Bool -> Html Msg
wrapper url portfolioItem showNext =
    let
        nextBtnArr =
            if showNext then
                [ nextBtn url ]
            else
                []
    in
        div [ class "pure-g" ]
            [ div [ class "pure-u-1 portfolio" ]
                (portfolioItem
                    ++ nextBtnArr
                )
            ]
