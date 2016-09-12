import _ from 'lodash';
import moment from 'moment';
import momentTimezone from 'moment-timezone';

export default adapt;

function adapt(source) {
  const adapted = source.list.map(adaptOne);
  const groupedByDay = _.groupBy(adapted, a => a.time.dayOfYear());
  const daysArray = _.values(groupedByDay);
  // TODO: Should really merge this last step with the group by
  const days = daysArray.map(makeDayForecast);
  return days;
}

function makeDayForecast(points) {
  return {
    day: points[0].time.format('dddd, D MMMM YYYY'),
    points: points
  };
}

function adaptOne(source) {
  const time = moment.unix(source.dt);
  return {
    time: time,
    formattedTime: time.tz('Europe/Moscow').format('h a'),
    temp: toCelsius(source.main.temp).toString() + ' \u00B0C'
  };
}

function toCelsius(kelvin) {
  // API returns temperatures in Kelvins by default
  return Math.round(kelvin - 273.15);
}
