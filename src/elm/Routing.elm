module Routing exposing (..)

import Navigation
import UrlParser
import Html exposing (..)
import Html.Events exposing (onClick, onWithOptions)
import Json.Decode as Decode


matchers : UrlParser.Parser (Route -> a) a
matchers =
    UrlParser.oneOf
        [ UrlParser.map HomeRoute UrlParser.top
        , UrlParser.map WorkRoute (UrlParser.s "work")
        , UrlParser.map AboutRoute (UrlParser.s "about")
        , UrlParser.map AmmaRoute (UrlParser.s "amma")
        , UrlParser.map InstashopRoute (UrlParser.s "instashop")
        , UrlParser.map DignityMealsRoute (UrlParser.s "dignity-meals")
        , UrlParser.map WeddingWebsiteRoute (UrlParser.s "wedding-website")
        ]


parseLocation : Navigation.Location -> Route
parseLocation location =
    case (UrlParser.parsePath matchers location) of
        Just route ->
            route

        Nothing ->
            NotFoundRoute


type Route
    = HomeRoute
    | WorkRoute
    | AboutRoute
    | AmmaRoute
    | InstashopRoute
    | DignityMealsRoute
    | WeddingWebsiteRoute
    | NotFoundRoute


homePath : String
homePath =
    "/"


workPath : String
workPath =
    "/work"


aboutPath : String
aboutPath =
    "/about"


ammaPath : String
ammaPath =
    "/amma"


instashopPath : String
instashopPath =
    "/instashop"


dignityMealsPath : String
dignityMealsPath =
    "/dignity-meals"


weddingPath : String
weddingPath =
    "/wedding-website"


onLinkClick : msg -> Attribute msg
onLinkClick message =
    let
        options =
            { stopPropagation = False
            , preventDefault = True
            }
    in
        onWithOptions "click" options (Decode.succeed message)
