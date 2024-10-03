import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get("location");

  const nonesenseWeather = getNonsenseWeather(location);

  return NextResponse.json({ weather: nonesenseWeather });
}

function getNonsenseWeather(location: string | null | string) {
  const conditions = ["sunny", "rainy", "cloudy", "windy", "snowy"];
  const adjective = [
    "fantastic",
    "incredible",
    "amazing",
    "terrific",
    "fantabulous",
  ];
  const phenomena = [
    "Raining Cats and dogs",
    "Flying pigs",
    "Small tsunami",
    "Levitating Ocean",
    "Thor Odinson Thunder Storm",
    "Hanging Mountains",
    "Flying Cars",
    "Underwater Cities",
    "Floating Islands",
    "Rainbow Mountains",
    "Sunny Rainforest",
    "Snowy Desert",
    "Cloudy Jungle",
  ];

  const randomCondition =
    conditions[Math.floor(Math.random() * conditions.length)];
  const randomAdjective =
    adjective[Math.floor(Math.random() * adjective.length)];
  const randomPhenomena =
    phenomena[Math.floor(Math.random() * phenomena.length)];

  return `The weather in ${location} is ${randomCondition} and ${randomAdjective} with a chance of ${randomPhenomena}`;
}
