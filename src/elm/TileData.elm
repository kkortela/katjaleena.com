module TileData exposing (..)

import Config exposing (imgPath)


type alias TileData =
    { url : String
    , imgSrc : String
    , title : String
    , desc : String
    }


ammaData : TileData
ammaData =
    { url = "amma"
    , imgSrc = imgPath ++ "amma.png"
    , title = "Amma"
    , desc = "Case project for building an app for asthma tracking"
    }


instashopData : TileData
instashopData =
    { url = "instashop"
    , imgSrc = imgPath ++ "instashop.png"
    , title = "Instashop"
    , desc = "Responsive online grocery store websites"
    }


dignityMealsData : TileData
dignityMealsData =
    { url = "dignity-meals"
    , imgSrc = imgPath ++ "dignitymeals.png"
    , title = "Dignity Meals"
    , desc = "Mobile app for connecting food donors with charities"
    }


weddingData : TileData
weddingData =
    { url = "wedding-website"
    , imgSrc = imgPath ++ "wedding.png"
    , title = "Wedding website"
    , desc = "Responsive wedding website"
    }
