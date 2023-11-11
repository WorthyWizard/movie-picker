import {
  CrewMember,
  Genre,
  Image,
  MovieData,
  ProductionCompany,
  ReleaseDatesWithoutId,
  SpokenLanguage,
  Video,
  WatchProvidersWithoutId,
} from "../../types/movie/data";

export const getGenresNames = (genres: Genre[]) =>
  genres.map((genre) => genre.name);

export const getGenreString = (genres: Genre[]) =>
  genres.map((genre) => genre.name).join(", ");

export const getYearString = (fullDate: string) => fullDate.split("-")[0];

export const getRuntimeString = (time: number) => {
  const hours = Math.floor(time / 60);
  const minutesLeft = time - hours * 60;
  return `${hours}h ${minutesLeft}m`;
};

export const getLanguageString = (languages: SpokenLanguage[]) =>
  languages.map((genre) => genre.name).join(", ");

export const getReleaseString = (release: string) =>
  release.split("-").join(".");

export const getFilteredCrewByJobs = (
  crewMembers: CrewMember[],
  jobs: string[]
) => {
  const filteredCrew: any = {};

  jobs.forEach((job) => {
    filteredCrew[job] = [];
    crewMembers.forEach((person) => {
      if (job === person.job) {
        filteredCrew[job].push(person.name);
      }
    });
  });

  return filteredCrew as { [key: string]: string[] };
};

export const getMovieCertification = (
  releaseDates: ReleaseDatesWithoutId,
  countryIsoCode: string = "US"
) => {
  let rate: string = "";

  if (releaseDates.results.length === 0) {
    return "Not defined";
  }

  const filteredReleaseDatesByCountry = releaseDates.results.filter(
    (releaseDate) => releaseDate.iso_3166_1 === countryIsoCode
  );

  if (filteredReleaseDatesByCountry.length === 0) {
    return "Not defined";
  }

  const certifications = filteredReleaseDatesByCountry[0].release_dates;

  if (!rate) {
    certifications.forEach(({ certification }) => {
      if (certification && !rate) {
        rate = certification;
      }
    });
  }

  return rate;
};

export const getFilteredImages = (images: Image[]) => {
  return [...images].sort((a, b) => b.vote_average - a.vote_average);
};

export const getWatchProvidersByCountry = (
  providers: WatchProvidersWithoutId,
  contryIsoCode: string = "US"
) => {
  return providers.results[contryIsoCode] ?? null;
};

export const getGenresNamesByIDs = (genres: number[]) => {
  const allGenres: Genre[] = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  const allGenreMap = allGenres.reduce(
    (acc, value) => Object.assign(acc, { [value.id]: value.name }),
    {} as { [key: string]: string }
  );

  return genres.map((genreID) => allGenreMap[genreID]);
};

export const getFilteredVideos = (videos: Video[]) => {
  return videos.filter(
    (video) =>
      video.official &&
      video.type.toLowerCase() === "trailer" &&
      video.site.toLowerCase() === "youtube" &&
      video.key
  );
};

export const getSortedMovies = (movies: MovieData[]) =>
  [...movies].sort(
    (a, b) => b.popularity - a.popularity && b.vote_count - a.vote_count
  );

export const getFilteredCompanies = (companies: ProductionCompany[]) =>
  companies.map((company) => company.name);
