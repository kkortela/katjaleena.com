module Components.Portfolio.WeddingWebsite exposing (weddingWebsite)

import Msgs exposing (Msg)
import Html exposing (..)
import Html.Attributes exposing (..)
import Config exposing (imgPath)
import Components.Portfolio.Wrapper exposing (wrapper)
import Components.Portfolio.Intro exposing (introText, processSteps)


weddingWebsite : Html Msg
weddingWebsite =
    wrapper Nothing portfolioItem False


portfolioItem : List (Html Msg)
portfolioItem =
    [ h1 [ class "hwed" ]
        [ text "Wedding Website" ]
    , a [ target "_blank", class "wedlink", href "http://www.mikatja.fi" ]
        [ text "www.mikatja.fi" ]
    , img
        [ class "portfolio-cover", src (imgPath ++ "wedding-cover.jpg") ]
        []
    , introText "Project:" "Creating responsive website for our wedding"
    , introText "Goal:" "To give information about the wedding for the guests and also a place for registration"
    , introText "My role:" "Visual Design and Front-end development"
    , h2 []
        [ text "Summary" ]
    , p []
        [ text "This project begun at the end of my first graphic design course, where I learned the principles of web design. I wanted to create responsive website for our wedding and was also encouraged to develop them myself (with the help of my future husband)." ]
    , p []
        [ text "The goal was to create beautiful, intuitive and responsive website that would be a delight to use. I browsed through different wedding websites and emulated the best features of the sites. I wanted to use long-form scrollable site with sticky menu to create effortless navigation of the site." ]
    , p []
        [ text "I started to design the site already on my Graphic Design 101 course starting from wireframes and style tiles. I created multiple iterations of the site before I landed on this one, so this was a process." ]
    , p []
        [ text "I was thrown to the deep end of the pool filled with ice-water and learned to swim. I learnt HTML/CSS and JavaScript on codeacademy.com and used my skills from there, and the help of my developer fiancé to create the website. I learnt to use Git and Heroku during this project." ]
    ]
