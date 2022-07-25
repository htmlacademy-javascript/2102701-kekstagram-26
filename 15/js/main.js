import './util.js';
import './miniature.js';
import './load-form.js';
import './change-size.js';
import './filter.js';
import './loaded-img.js';
import {loadData, applyImgFilter} from './api.js';
import {renderPhotoList} from './miniature.js';
loadData()
  .then((photos) => {applyImgFilter(photos, (orderedPhotos) => renderPhotoList(orderedPhotos));});

