module Components.Portfolio.Intro exposing (introText, processSteps)

import Msgs exposing (Msg)
import Html exposing (..)
import Html.Attributes exposing (..)
import Config exposing (imgPath)


introText : String -> String -> Html Msg
introText title desc =
    div [ class "introduction" ]
        [ span [] [ text title ]
        , p [] [ text desc ]
        ]


processSteps : String -> String -> List String -> Html Msg
processSteps svg titleText texts =
    let
        icon =
            img [ class "icon", src (imgPath ++ svg ++ ".svg") ] []

        title =
            span [] [ text titleText ]
    in
        div [ class "pure-u-lg-1-4 process" ]
            ([ icon
             , title
             ]
                ++ List.map processParagraph texts
            )


processParagraph : String -> Html Msg
processParagraph processText =
    p [] [ text processText ]
