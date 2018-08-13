module Components.About exposing (about)

import Msgs exposing (Msg)
import Html exposing (..)
import Html.Attributes exposing (..)


about : Html Msg
about =
    div [ class "about" ]
        [ div [ class "pure-g" ]
            [ div [ class "pure-u-1 pure-u-lg-1-3 pure-u-xl-1-2" ]
                [ aboutImg ]
            , div [ class "pure-u-1 pure-u-lg-2-3 pure-u-xl-1-2" ]
                [ aboutme
                ]
            ]
        ]


aboutImg : Html Msg
aboutImg =
    div [ class "imgWrapper" ]
        [ img [ src "static/img/aboutme.jpg" ] []
        ]


aboutme : Html Msg
aboutme =
    div [ class "aboutme" ]
        [ h1 [] [ text "I’m Katja, glad to meet you!" ]
        , p [] [ text "I’m Katja, an UX designer with background in Bioproduct Engineering (I know, right!). I’m pursuing a career as a UX Designer with emphasis on UI design. I currently live in Helsinki, but my roots are in Northern Karelia." ]
        , p [] [ text "My goal as a designer is to make people’s lives easier. I really want to design products for a cause and the needs of people, not tout something that only profits the business. I engage myself in user research, and keep the user close during the process to honestly create something meaningful. That being said, I enjoy most doing iterations of visual features and really testing my skills in creating dashing designs with purpose." ]
        , p [] [ text "In my freetime I focus on evolving myself and my skills, test beta versions of new services, do yoga, dance, play kantele and make it count with my friends." ]
        , downloadResumeBtn
        ]


downloadResumeBtn : Html Msg
downloadResumeBtn =
    div [ class "downloadBtnWrapper" ]
        [ a [ target "_blank", class "downloadBtn", href "../../static/resume.pdf" ]
            [ text "Download my resume" ]
        ]
