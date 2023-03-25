import './scss/style.scss'
import 'swiper/swiper.css'
import 'droppy-menu/dist/droppy.min.css'
import { setupHeaderSlider } from './headerSlider.js'
import { setupAboutUsSlider } from "./aboutUsSlider.js";
import { setupNavigation } from "./navigationDropdown.js";


setupNavigation()
setupHeaderSlider()
setupAboutUsSlider()
