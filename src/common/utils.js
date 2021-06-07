export class ImagesEndpoints {
  static poster() {
    return 'https://image.tmdb.org/t/p/w342';
  }

  static backgrop() {
    return 'https://image.tmdb.org/t/p/w1280';
  }
}

export const getGenreString = (genres) => genres.map(genre => genre.name).join(', ');

export const getYearString = (fullDate) => fullDate.split('-')[0];

export const getRuntimeString = (time) => {
  const hours = Math.floor(time / 60);
  const minutesLeft = time - hours * 60;
  return `${hours}h ${minutesLeft}m`;
}