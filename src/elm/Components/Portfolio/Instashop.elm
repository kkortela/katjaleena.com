module Components.Portfolio.Instashop exposing (instashop)

import Msgs exposing (Msg)
import Html exposing (..)
import Html.Attributes exposing (..)
import Config exposing (imgPath)
import Components.Portfolio.Wrapper exposing (wrapper)
import TileData exposing (dignityMealsData)
import Components.Portfolio.Intro exposing (introText, processSteps)


instashop : Html Msg
instashop =
    wrapper (Just dignityMealsData.url) portfolioItem True


portfolioItem : List (Html Msg)
portfolioItem =
    [ h1 []
        [ text "instashop" ]
    , img
        [ class "portfolio-cover", src (imgPath ++ "instashop-cover.jpg") ]
        []
    , introText "Project:" "Responsive website for online grocery store"
    , introText "Target user:" "People who find grocery shopping inconvinient, who need inspiration for grocery shopping, or who can’t go grocery shopping"
    , introText "Goal:" "To create an effective, intuitive and convinient way for users to find inspiration for cooking, list, shop and keep track of their grocery purchases online"
    , introText "My role:" "UX and Visual Designer"
    , div [ class "processmain" ]
        [ processSteps "research-icon" "Research" [ "Secondary Research", "Empathy Research", "Interviews" ]
        , processSteps "strategy-icon" "Strategy" [ "Feature Matrix", "Personas", "Empathy Map", "User Journey", "Competitor Analysis", "Business Goals", "Card Sorting", "Sitemap & User Flows" ]
        , processSteps "ixd-icon" "Interaction Design" [ "Responsive Wireframes", "Design Patterns", "Prototype", "Usability Testing" ]
        , processSteps "ui-icon" "UI Design" [ "Logo & Icon Design", "Brand Style Tile", "UI Kit" ]
        ]
    , h2 []
        [ text "Summary" ]
    , p []
        [ text "My research showed that the people aren’t very fond of grocery shopping and they wish that there was an easier way for that. In this project the target users were busy professionals, who didn’t have time or motivation for shopping. This insight in mind, I streamlined a service that is effortless and intuitive to use and brings relief to people’s daily life." ]
    , h2 []
        [ text "Process" ]
    , p
        []
        [ text "For Instashop project I think it was vital to understand the current market for online grocery stores, who uses them, and what needs to be improved. I interviewed 9 people for the research. The answers were divided: some of them were positive towards online grocery stores, because they didn’t like grocery shopping, and were too busy to shop. Then again, some people liked the grocery shopping experience and thought that the haptic side of it is crucial. They want to feel and see the quality of the products they’re purchasing." ]
    , h3 []
        [ text "Strategy" ]
    , p []
        [ text "After the interviews I sorted out of what features people would like to have in Instashop. Based on the empathy research I genreated a feature matrix, where the most wanted features were presented. People wanted features that would ease their descision making, such as store-specific offers, generating shopping lists and browse through recipes. I also defined which type of users would benefit the most of a certain feature. This helped me in persona creation." ]
    , p []
        [ text "Originally I had three personas: a self-indulgent shopper, a budget-constrained shopper and a busy professional. I chose to elaborate the busy professional, since based on research that seemed to be the most common type. Young, busy professional would benefit a great deal of Instashop, since they are career makers with no much free-time on their hands, and they wish not to waste that on mandatory chores." ]
    , img [ src (imgPath ++ "instashop-persona.png") ] []
    , p [ class "caption" ]
        [ text "Persona for busy professional that is created based on the interviews" ]
    , p []
        [ text "For empathy map I tried to put myself in Henri’s shoes and embrace his experiences. It was difficult to dial down my own experiences and stick to Henri’s story. As a busy professional, Henri experiences a lot during a normal day. His workdays stretch out, but he wants to attend to hockey practice, and have also some me-time. That’s why the mandatory chores, such as grocery shopping, are usually left ignored." ]
    , img [ src (imgPath ++ "instashop-empathymap.png") ] []
    , p [ class "caption" ]
        [ text "Empathy map of Henri" ]
    , p []
        [ text "To help create a sitemap for Instashop I conducted a card sorting workshop. I asked the participants to sort 50 produce to categories of their own making. I reached better understanding of where people would expect to find certain produces. I created a sitemap with the help of the card sorting and drafted user flow for purchasing a product from Instashop." ]
    , img [ class "noshadow", src (imgPath ++ "instashop-sitemap.png") ] []
    , p [ class "caption" ]
        [ text "Sitemap of Instashop" ]
    , h3 []
        [ text "Interaction Design" ]
    , p []
        [ text "Since Instashop was a responsive website I designed the wireframes mobile-first. I made an inventory for each page to clarify and organise the features. Then I sketched my ideas on the paper before expanding th wireframes in Sketch." ]
    , img [ src (imgPath ++ "instashop-sketches.jpg") ] []
    , p [ class "caption" ]
        [ text "Sketches of the responsive wireframes for Instashop" ]
    , img [ src (imgPath ++ "instashop-wireframes.png") ] []
    , p [ class "caption" ]
        [ text "Responsive wireframes of the landing page, product page and shopping cart page." ]
    , p []
        [ text "I used design patterns to develop the wireflows for Instashop. People are used to accomplish standard tasks in a certain way, so it is good to use design patterns for consistency. Introducing new ways to complete a known task might be confusing to the users." ]
    , p [ class "inline" ]
        [ text "For quick prototyping I used Marvel’s POP to create paper prototypes. The rapid prototyping helped me to test the flows and iterate the wireframes efficiently. I created a more elaborate" ]
    , a [ target "_blank", href "https://invis.io/YCAIQRJEV#/211249122_Homepage" ]
        [ text "desktop prototype with InVision." ]
    , p [ class "inline" ]
        [ text "The task for this prototype was to add products to shopping cart, view shopping cart, go to checkout and create an account during checkout." ]
    , p []
        [ text "I conducted the usability tests remotely and observed as the testers would accomplish the given tasks. The benefits of remote testing is that the testers can perform the test from the comfort of their homes, in their natural habitat. The usability tests helped me to improve the features and flows of Instashop." ]
    , h3 []
        [ text "User Interface Design" ]
    , p []
        [ text "My research and interaction designs laid a foundation for my interface design. I started by creating a logo that would highlight the Instashop brand, and created an iconset to match. For the brand style inspiration I collected a moodboard. I decided to use clean primary colors for inviting and fresh feeling." ]
    , img [ src (imgPath ++ "instashop-uikit.png") ] []
    , p []
        [ text "I created the landing page of Instashop for mobile, tablet and desktop views." ]
    , img [ class "portfolio-cover", src (imgPath ++ "instashop-cover.jpg") ] []
    , h2 []
        [ text "Reflection" ]
    , p []
        [ text "I felt that I could relate to the Instashop users myself, because I fit the profile of busy professional. This helped me to design the service from user perspective. But this was also a problem, since I am the designer, not the user. I had to remind myself that I need to disitinguish the difference between designing to other people and designing to my own good. This taught me the importance of empathy." ]
    , p []
        [ text "If I’ve had more time to do the research, I would’ve consentrated more to ethnographic research, interviews, card sorting and usability tests. I would’ve also created more personas to cover a larger segment." ]
    , p []
        [ text "I also learned a great deal about responsive design. It is important to do the inventory of features and organize them, and to design mobile-first. I did it here the other way around: desktop > tablet > mobile. Now I know better." ]
    ]
