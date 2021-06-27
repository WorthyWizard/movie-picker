export class ImagesEndpoints {
  static poster() {
    return 'https://image.tmdb.org/t/p/w342';
  }

  static backdrop() {
    return 'https://image.tmdb.org/t/p/w1280';
  }

  static profile() {
    return 'https://image.tmdb.org/t/p/w300';
  }
}

export const getGenreString = (genres) => genres.map(genre => genre.name).join(', ');

export const getYearString = (fullDate) => fullDate.split('-')[0];

export const getRuntimeString = (time) => {
  const hours = Math.floor(time / 60);
  const minutesLeft = time - hours * 60;
  return `${hours}h ${minutesLeft}m`;
}

export const getLanguageString = (langs) => langs.map(genre => genre.english_name).join(', ');

export const getReleaseString = (release) => release.split('-').join('/');

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

export const getFilteredCast = (dataArray, count) => {
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
  const certification = dataArray.filter(movie => movie['iso_3166_1'] == 'US')[0]['release_dates'];
  
  if(!rate) {
    certification.forEach(el => {
      if(el.certification && !rate) {
        rate = el.certification
      }
    })
  }
  
  return rate;
}