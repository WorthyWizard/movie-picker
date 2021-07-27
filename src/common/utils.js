export class ImagesEndpoints {
  static get poster() {
    return 'https://image.tmdb.org/t/p/w342';
  }

  static get backdrop() {
    return 'https://image.tmdb.org/t/p/w1280';
  }

  static get profile() {
    return 'https://image.tmdb.org/t/p/w300';
  }

  static get logo() {
    return 'https://image.tmdb.org/t/p/w92';
  }

  static get loader() {
    return 'https://image.tmdb.org/t/p/w92';
  }
}

class LocalStorage {
  add(data) {
    const storageItem = this.get();
    if(Array.isArray(storageItem)) {
      const filteredItem = storageItem.filter(el => JSON.stringify(el) === JSON.stringify(data));
      if(filteredItem.length > 0) {
        return;
      } else {
        storageItem.push(data);
        localStorage.setItem(this.item, JSON.stringify(storageItem));
      }
    }
  }

  get() {
    return JSON.parse(localStorage.getItem(this.item))
  }

  remove(data) {
    const storageItem = this.get();
    const filteredItems = storageItem.filter(el => JSON.stringify(el) !== JSON.stringify(data));
    console.log(filteredItems);
    localStorage.setItem(this.item, JSON.stringify(filteredItems));
  }

  clear() {
    localStorage.clear();
  }
  
  toggle(data) {
    const storageItem = this.get();
    if(Array.isArray(storageItem)) {
      const filteredItem = storageItem.filter(el => JSON.stringify(el) === JSON.stringify(data));
      if(filteredItem.length > 0) {
        this.remove(data)
      } else {
        this.add(data)
      }
    }
  }

  has(data) {
    const storageItem = this.get();
    if(Array.isArray(storageItem)) {
      return storageItem.filter(el => JSON.stringify(el) === JSON.stringify(data)).length > 0;
    }
  }

  isEmpty() {
    const storageItem = this.get();
    return !storageItem || storageItem.length === 0;
  }

  validation(item, type) {

    if(!item && !type) {
      throw new Error('You must create the storage item first, call create(item, type) method');
    }

    switch(true) {
      case !item:
        throw new Error('Local storage item must not be empty');
      case typeof item !== 'string':
        throw new Error('Local storage item must have name which is type of "string"');
    }

    switch(true) {
      case type === 'empty':
        throw new Error('Local storage type must be specified and not be empty. This are allowed types: [], {}, empty string and numbers.');
      case typeof type === 'string' && type.trim() === '':
        this.type = '';
      case type === null || type === undefined || (typeof type !== 'object' && typeof type !== 'number') || typeof type === 'string':
        throw new Error('Local storage has got a wrong type value. This are allowed types: [], {}, "" and numbers.');
      default:
        this.type = JSON.stringify(type);
    }

  }
}

export class LocalStorageItem extends LocalStorage {
  constructor(item, type = 'empty') {
    super();
    this.item = item;
    this.type = type;
    this.validation(this.item, this.type);

    const storageItem = this.get();
    if(!storageItem) {
      localStorage.setItem(this.item, this.type);
    }
  }
}

export const update = (oldObject, updatedProperties) => {
  return { ...oldObject, ...updatedProperties }
} 

export const getFilteredGenre = (genres) => genres.map(genre => genre.name);

export const getGenreString = (genres) => genres.map(genre => genre.name).join(', ');

export const getYearString = (fullDate) => fullDate.split('-')[0];

export const getRuntimeString = (time) => {
  const hours = Math.floor(time / 60);
  const minutesLeft = time - hours * 60;
  return `${hours}h ${minutesLeft}m`;
}

export const getLanguageString = (langs) => langs.map(genre => genre.english_name).join(', ');

export const getReleaseString = (release) => release.split('-').join('.');

export const formatNumber = (number, divider) => {
  let num = number.toString();
  let hundreds = [];
  let numLength = num.length;
  let hundredsCount = Math.floor(numLength / 3);
  let start = '';

  if(numLength % 3 != 0) {
    start = num.substr(0, numLength % 3) + divider;
  }

  for(let i = 1; i <= hundredsCount; i++) {
    hundreds.push(num.substr(numLength - (i * 3), 3));
  }

  return start + hundreds.reverse().join(divider);
};

export const getFilteredCast = (dataArray, count = 10) => {
  return dataArray.slice(0, count);
}

export const getFilteredCrew = (dataArray) => {
  const crew = {
    directors: [],
    writers: [],
  };
  dataArray.forEach(person => {
    switch(person.job) {
      case 'Director':
        crew['directors'].push(person.name);
        break;
      case 'Writer':
        crew['writers'].push(person.name);
        break;
      case 'Screenplay':
        crew['writers'].push(person.name);
        break;
    }
  });
  return crew;
}

export const getMovieCertification = (dataArray) => {

  let rate = '';
  let certification = '';

  if(dataArray.length == 0) {
    return 'Not defined';
  } 

  const certificationUS = dataArray.filter(movie => movie['iso_3166_1'] == 'US');

  if(certificationUS.length == 0) {
    return 'Not defined';
  } else {
    certification = certificationUS[0]['release_dates'];
  }
  
  if(!rate) {
    certification.forEach(el => {
      if(el.certification && !rate) {
        rate = el.certification
      }
    })
  }
  
  return rate;
}

export const getFilteredImages = (dataArray) => {
  return dataArray.sort((a, b) => b.vote_average - a.vote_average);
}

export const getFilteredWatchProviders = (dataObject) => {
  return dataObject['results']['US'] ? dataObject['results']['US'] : null;
}

export const getFilteredGenreByIDs = (dataArray) => {
  const allGenre = [
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

  const allGenreObj = allGenre.reduce((acc, value) => Object.assign(acc, {[value.id]: value.name}), {});

  return dataArray.map(genreID => allGenreObj[genreID]);
}

export const getFilteredVideos = (dataArray) => {
  return dataArray.filter(video => video.type.toLowerCase() === 'trailer' && video.site.toLowerCase() === 'youtube' && video.key)
}

export const objectToArray = (obj) => {
  const resultArray = [];
  for(let key in obj) {
    resultArray.push(obj[key]);
  }
  return resultArray;
}

export const getFilteredMovies = (dataArray) => {
  return dataArray.filter(movie => !movie.adult);
}

export const getFilteredCompanies = (companies) => companies.map(company => company.name);

export const getAdjustedGradient = (colorsArray) => {

  const getAdjustedOpacity = (average) => {
    let opacity = 0;
    if(average <= 50) {
      opacity = 0.6;
    } else if (average > 50 && average <= 120) {
      opacity = 0.35;
    } else if (average > 120 && average <= 220) {
      opacity = 0.15
    } else if (average > 220) {
      opacity = 0.1
    }
    return opacity;
  }

  const getAverageColorNum = (acc, cur) => {
    let avg = Math.ceil(cur.reduce((acc, val) => acc + val, 0) / 3);
    return Object.assign(acc, { [`${avg}`]: cur.join(',') });
  }
  
  const colorsObject = colorsArray.reduce(getAverageColorNum, {});
  const colorsAvg = Object.keys(colorsObject).sort((a, b) => b - a);
  const minAvg = colorsAvg[colorsAvg.length - 1];
  const maxAvg = colorsAvg[0];

  if(minAvg < 50) {
    return {
      color: colorsObject[maxAvg],
      opacity: getAdjustedOpacity(maxAvg)
    }
  } else {
    return {
      color: colorsObject[minAvg],
      opacity: getAdjustedOpacity(minAvg)
    }
  }
  
}