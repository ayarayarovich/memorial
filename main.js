import './scss/style.scss'
import 'swiper/swiper.css'
import 'droppy-menu/dist/droppy.min.css'
import { setupHeaderSlider } from './headerSlider.js'
import { setupAboutUsSlider } from "./aboutUsSlider.js";
import { setupNavigation } from "./navigationDropdown.js";


try {
    setupNavigation()
} catch (ignore) {}

try {
    setupHeaderSlider()
} catch (ignore) {}

try {
    setupAboutUsSlider()
} catch (ignore) {}
