module View exposing (..)

import Html exposing (..)
import Msgs exposing (Msg)
import Models exposing (Model, model)
import Routing exposing (Route)
import Components.Home exposing (home)
import Components.Header exposing (navBar)
import Components.Footer exposing (footerLinks)
import Components.About exposing (about)
import Components.Work exposing (work)
import Components.Portfolio.Amma exposing (amma)
import Components.Portfolio.Instashop exposing (instashop)
import Components.Portfolio.DignityMeals exposing (dignityMeals)
import Components.Portfolio.WeddingWebsite exposing (weddingWebsite)


view : Model -> Html Msg
view model =
    div []
        [ navBar
        , page model
        , footerLinks
        ]


page : Model -> Html Msg
page model =
    case model.route of
        Routing.HomeRoute ->
            home

        Routing.WorkRoute ->
            work

        Routing.AboutRoute ->
            about

        Routing.AmmaRoute ->
            amma

        Routing.InstashopRoute ->
            instashop

        Routing.DignityMealsRoute ->
            dignityMeals

        Routing.WeddingWebsiteRoute ->
            weddingWebsite

        Routing.NotFoundRoute ->
            text "Not Found"
