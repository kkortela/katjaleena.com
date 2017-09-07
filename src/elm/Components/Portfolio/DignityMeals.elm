module Components.Portfolio.DignityMeals exposing (dignityMeals)

import Msgs exposing (Msg)
import Html exposing (..)
import Html.Attributes exposing (..)
import Config exposing (imgPath)
import Components.Portfolio.Wrapper exposing (wrapper)
import TileData exposing (weddingData)
import Components.Portfolio.Intro exposing (introText, processSteps)


dignityMeals : Html Msg
dignityMeals =
    wrapper (Just weddingData.url) portfolioItem True


portfolioItem : List (Html Msg)
portfolioItem =
    [ h1 []
        [ text "Dignity meals" ]
    , img
        [ class "portfolio-cover", src (imgPath ++ "dignitymeals-cover.jpg") ]
        []
    , introText "Project:" "App for donating food surlpus to charities"
    , introText "Target user:" "Establishments that produce food surplus (e.g. restaurants, school cafeterias) and charities who  need food donations"
    , introText "Goal:" "To connect those who produce the food surplus viable for donations with those who need food"
    , introText "My role:" "UX and Visual Designer"
    , div [ class "processmain" ]
        [ processSteps "research-icon" "Research" [ "Generative Research", "Market Research", "Interviews" ]
        , processSteps "strategy-icon" "Strategy" [ "UX Strategy Blueprint", "Product Roadmap", "Personas", "User Flows" ]
        , processSteps "ixd-icon" "Interaction Design" [ "Wireframes", "Prototype", "Usability Testing" ]
        , processSteps "ui-icon" "UI Design" [ "Style Guide", "Logo & Icon Design", "Key Screen Templates" ]
        ]
    , h2 []
        [ text "Summary" ]
    , p []
        [ text "The purpose of Dignity Meals was to match food donors with charities. The focus here was to decrease disposing of viable food surplus, and instead, donating it to nearby charities. My research showed that the restaurants that produce food surplus would be willing do donate it, and the receivers would gladly participate to the distribution of the donations. Using this insight, I created a way for the food donor and recepient to communicate. The donors could inform about donations or assign a donation to a certain charity. The recepients could find donations nearby or request a donation." ]
    , h2 []
        [ text "Process" ]
    , h3 []
        [ text "Research" ]
    , p []
        [ text "The research phase was very interesting to me. I wanted to understand the situation of food donations in Finland, how the food surplus is divided between different sectors and how it is handled. I interviewed organizations who have experience on food delivery business, helping restaurants to sell food surplus or charity work. I received valuable information of the painpoints of donating and distributing food donations, and what actions would help to solve the problems." ]
    , img [ class "noshadow", src (imgPath ++ "dignitymeals-chart.png") ] []
    , p [ class "caption" ]
        [ text "Piechart of how the food surplus is divided between differetn sectors" ]
    , div [ class "pure-g" ]
        [ div [ class "pure-u-lg-1-2" ]
            [ p [ class "citation" ]
                [ text "“Restaurants and schools would be willing to donate, but they don’t have a delivery system.”" ]
            ]
        , div [ class "pure-u-lg-1-2" ]
            [ p [ class "citation" ]
                [ text "“The people who receive the food aid are willing to participate in delivering the donations, which has also a good social impact.”" ]
            ]
        ]
    , h3 []
        [ text "Strategy" ]
    , p []
        [ text "I created provisional personas of the food donor and recepient based on the interview data. Maria is a restaurant manager who wishes to do more good, and most of the food surplus the restaurant produces goes to waste. She would be glad to donate the extra food, but is worried of the regulations and how the delivery would work." ]
    , p []
        [ text "Jukka runs a guesthouse for homeless people. He sees a lot of potential in the residents of guesthouse, and thinks that they should be motivated to get connected to the society. He is worried that there isn’t enouhg capacity to accommodate and feed all the residents." ]
    , img [ class "noshadow", src (imgPath ++ "dignitymeals-personas.png") ] []
    , p [ class "caption" ]
        [ text "Provisional personas of the food donor and recepient for Dignity Meals." ]
    , p []
        [ text "From the needs of the provisional personas I mapped user flows for the food donor and the recipient. Both include the onboarding and dashboards for each user types. I created a user flow for food donor to make a donation, and for the recepient to make arequest for donation." ]
    , img [ src (imgPath ++ "dignitymeals-userflows.png") ] []
    , p [ class "caption" ]
        [ text "User flows for the food donor and the recepient" ]
    , h3 []
        [ text "Interaction Design" ]
    , p []
        [ text "I sketched wireframes based on the user flows. I concentrated on simple onboarding and easy way to make a donation or a request. In the sign up screen the user can choose either signing up as a donor or as a recepient, and then directed to onboarding. The dashboard view is a map, where the donor can see the recepients pinned on the map and assign a donation for a certain recepient, or make a donation. If the user is signed up as recepient, the map shows the nearby food donors, and whether they have active donations." ]
    , img [ src (imgPath ++ "dignitymeals-sketches.jpg") ] []
    , p [ class "caption" ]
        [ text "Skethces of the Dignity Meals wireframes" ]
    , img [ src (imgPath ++ "dignitymeals-wireframes.png") ] []
    , p [ class "caption" ]
        [ text "Wireframes created with Sketch" ]
    , p [ class "inline" ]
        [ text "I used these wireframes to create a" ]
    , a [ target "_blank", href "https://marvelapp.com/1jd7g6h/screen/18283717" ]
        [ text "prototype in Marvel" ]
    , p [ class "inline" ]
        [ text "for usability testing. I visited four restaurants and asked them to test the prototype, and answer few questions about donating food surplus. I gave the testers a task to sign up to the service and make a donation. The testers were very enthusiastic about the idea of donating food surplus and were willing to participate." ]
    , p []
        [ text "There were few errors in the prototype testing with the dashboard and making a donation. Some testers were confused about how they could assign a donation to a certain charities and where to put the information about the food they were donating. These insights and comments helped me to improve the user flows, and to create more functional service." ]
    , h3 []
        [ text "User Interface Design" ]
    , p []
        [ text "I enjoyed creating a brand style for Dignity Meals. I created a brand style that reflected doing good, friendliness, trust, happiness and the joy of giving. I used round, friendly fonts and color green to represent these values. The logo is a spoon and a leaf representing food, giving, nature and wellbeing." ]
    , img [ src (imgPath ++ "dignitymeals-styleguide.png") ] []
    , p []
        [ text "I improved the work flows based on the comments I got from the prototype testing and used the style guide to create the final designs for the Dignity Meals screens." ]
    , img [ class "portfolio-cover", src (imgPath ++ "dignitymeals-keyscreens.jpg") ] []
    , h2 []
        [ text "Reflection" ]
    , p []
        [ text "Dignity Meals project taught me valuable and eye-opening things about the situation of food waste, food donations and charities. This is why I love UX design, and especially the research phase. I really get to learn new things and broaden my knowledge. Sometimes I get even too excited about the research and don’t know how to stop. In this case, I wish I had time to interview also the recepients and get a better understanding of how the logistics work between the donor and the recepient." ]
    , p []
        [ text "If I had more time for this project I would’ve wanted to learn how the food companies use different services, like Wolt, Foodora, ResQ and Lunchie.  I would’ve interviewed the companies to ask how they like using the apps and could the apps serve them better. " ]
    , p []
        [ text "It would’ve been nice to do more usability tests to really understand what would be the best user flows, and how to create effortless and intuitive ways to perform the tasks." ]
    ]
