import * as _ from "lodash"

export default function(allSongsArray) {
  let artists = _.chain(allSongsArray).uniq("artist").pluck("artist").value();
  let albums = _.chain(allSongsArray).uniq("albums").pluck("albums").value();

  return { artists, albums };
}

