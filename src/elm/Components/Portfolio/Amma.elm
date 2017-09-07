module Components.Portfolio.Amma exposing (amma)

import Msgs exposing (Msg)
import Html exposing (..)
import Html.Attributes exposing (..)
import Config exposing (imgPath)
import Components.Portfolio.Wrapper exposing (wrapper)
import TileData exposing (instashopData)
import Components.Portfolio.Intro exposing (introText, processSteps)


amma : Html Msg
amma =
    wrapper (Just instashopData.url) portfolioItem True


portfolioItem : List (Html Msg)
portfolioItem =
    [ h1 []
        [ text "Amma" ]
    , img [ class "portfolio-cover", src (imgPath ++ "amma-cover.jpg") ]
        []
    , introText "Project:" "Asthma Management and Monitoring App"
    , introText "Target user:" "Adult asthmatics, who want to track their asthma"
    , introText "Goal:" "To help the asthmatics to understand the relation of the triggers and symptoms and to manage their asthma by creating action plans"
    , introText "My Role:" "UX and Visual Designer"
    , div [ class "processmain" ]
        [ processSteps "research-icon" "Research" [ "UX Strategy Blueprint", "Personas", "Feature Matrix", "User Flows" ]
        , processSteps "strategy-icon" "Strategy" [ "Market Research", "Secondary Research", "Interviews" ]
        , processSteps "ixd-icon" "Interaction Design" [ "Wireframes", "Prototype", "Usability Testing" ]
        , processSteps "ui-icon" "Strategy" [ "UI Design", "Style Guide", "Logo Design", "Key Screen Templates" ]
        ]
    , h2 []
        [ text "Summary" ]
    , p []
        [ text "This was a capstone project made in collaboration with Designlab and Google Healthcare Initiative (GHI)." ]
    , p []
        [ text "The challenge here was to really understand the asthmatics and their condition, and how they manage asthma. My research showed that the adult asthmatics have their condition controlled, but they would like to be notified of their medication, to measure their peak flows, and to monitor what affects and causes their worsening symptoms. Using this insight, I made it possible for the asthmatics to effortlessly create action plans, keep track of their peak flow and vitals, and be aware of the triggers." ]
    , h2 []
        [ text "Process" ]
    , h3 []
        [ text "Research" ]
    , p []
        [ text "I wanted to gain understanding of the situation of asthma in Finland, who suffer from it, and what methods for asthma management are on the market. Based on the findings I prepared an interview for adult asthmatics to understand their daily life. I learned that people have various types of asthma that needs different kind of attention, but still with modern medicine, the symptoms are well under control. This meant that adult asthmatics don’t have an urgent need for asthma management method. However, I found out that they would be interested to track their symptoms, get reminders for taking medicine and measure their peak flow, and see how different factors (weather, exercise) affect their condition." ]
    , h3 []
        [ text "Strategy" ]
    , img [ src (imgPath ++ "amma-persona.png") ] []
    , p [ class "caption" ]
        [ text "Provisional persona based on the interview data" ]
    , p []
        [ text "I created a provisional persona based on the interviewees’ answers. The persona is an active adult, Laura, who has exercise induced asthma, but is very active. She likes to understand her condition better, and see how her exercise affects her symptoms and vice versa." ]
    , p []
        [ text "From the needs of the provisional persona I mapped user flows for onboarding and creating an action plan." ]
    , img [ src (imgPath ++ "amma-userflows.png") ] []
    , p [ class "caption" ]
        [ text "User flows for onboarding and creating an action plan" ]
    , h3 []
        [ text "Interaction Design" ]
    , p []
        [ text "Using the user flows as a basis, I first sketched few ideas for the wireframes, and created them with Sketch. Since this was a project for Google, I wanted to apply material design to my designs. " ]
    , img [ src (imgPath ++ "amma-sketches.png") ] []
    , p [ class "caption" ]
        [ text "Sketches of my AMMA wireframes" ]
    , img [ src (imgPath ++ "amma-sketches.jpg") ] []
    , p [ class "caption" ]
        [ text "Wireframe screens of sign up, welcome screen, creating action plan, morning report, dashboard, and peak flow data." ]
    , img [ class "noshadow", src (imgPath ++ "amma-wireframes.png") ] []
    , p [ class "caption" ]
        [ text "Wireframe screens of sign up, welcome screen, creating action plan, morning report, dashboard, and peak flow data." ]
    , p [ class "inline" ]
        [ text "I used these wireframes to create a" ]
    , a [ target "_blank", href "https://marvelapp.com/2jab69j/screen/24607525" ]
        [ text "prototype in Marvel" ]
    , p [ class "inline" ]
        [ text "for usability testing. I conducted remote usability tests and online click tests in Usability Hub. The tasks for the usability tests were to sign up to the app as a new user, create an action plan and follow the morning’s action plan. The goal was to find out the fluency of the tasks and where the errors occurred. " ]
    , h3 []
        [ text "User Interface Design" ]
    , p []
        [ text "To reflect the brand of AMMA I created a logo and brand style tile to reflect their values. The idea of AMMA was to be a modern, lifestyle health app that gives a fresh and vibrant feeling to its users." ]
    , img [ src (imgPath ++ "amma-styleguide.png") ] []
    , p []
        [ text "The final solution came effortlessly to me, since I had gained a clear vision of what asthmatics would want from the app. It should feel more like a lifestyle health app than a medical app, beacuse the asthmatics didn’t want to be defined or controlled by asthma. " ]
    , img [ src (imgPath ++ "amma-keyscreens.png") ] []
    , h2 []
        [ text "Reflection" ]
    , p []
        [ text "Since I’m not an asthmatic myself, this project really taught me the importance of understanding the user. The asthmatics I interviewed for AMMA had their condition pretty much under control, and didn’t seem to need any management method. But since people naturally are interested of collecting information about themselves and get a better understanding of their condition, I think they would find using AMMA helpful. Or I could’ve done the interviews with another target group who would benefit more of managing their asthma with this app." ]
    , p []
        [ text "I pushed myself to create a conversational, effortless and aesthetic solution to help engage the person to return repeatedly to the app. I also learned the use material design guidelines for designing AMMA." ]
    ]
