'use strict';
import PropTypes from 'prop-types';
import React, { useContext, useState, useEffect, useReducer, useCallback } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
  Image,
  Platform,
  Linking,
  Alert,
} from 'react-native';

import {
  CategoryColorLine,
  CategoryBlockLink,
  TwoBox,
  SystemButton,
  LoadingView, SefariaPressable,
} from './Misc.js';
import { STATE_ACTIONS, DispatchContext, GlobalStateContext, getTheme } from './StateManager';
import VersionNumber from 'react-native-version-number';
import ActionSheet from 'react-native-action-sheet';
import SearchBar from './SearchBar';
import ReaderNavigationCategoryMenu from './ReaderNavigationCategoryMenu';
import styles from './Styles.js';
import strings from './LocalizedStrings.js';
import Sefaria from './sefaria';
import {
  getFullBookList,
  getLocalBookList,
  PackagesState
} from './DownloadControl';
import { useAsyncVariable } from './Hooks';
import ReaderNavigationMenu from "./ReaderNavigationMenu";

/**
 * Navigation menu for misc areas of the app that are not the text reader interfaces
 * Copied from SefariaProject's `MobileNavMenu` component
 * @param props
 * @constructor
 */
const GeneralNavigationMenu = props => {
    
}

export default GeneralNavigationMenu;