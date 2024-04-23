import { useSelector, useDispatch } from 'react-redux'
import cx from 'classnames';

import styles from './index.module.css'

import { COLORS, MENU_ITEMS } from '@/constants'
// import {changeColor, changeBrushSize } from '@/slice/toolboxSlice'
// import { socket } from "@/socket";

const Toolbox = () => {
    // const dispatch = useDispatch()
    // const activeMenuItem = useSelector((state) => state.menu.activeMenuItem)
    // const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL
    // const showBrushToolOption = activeMenuItem === MENU_ITEMS.PENCIL || activeMenuItem === MENU_ITEMS.ERASER
    // const {color, size} = useSelector((state) => state.toolbox[activeMenuItem])

    // const updateBrushSize = (e) => {
    //     dispatch(changeBrushSize({item: activeMenuItem, size: e.target.value}))
    //     socket.emit('changeConfig', {color, size: e.target.value })
    // }

    // const updateColor = (newColor) => {
    //     dispatch(changeColor({item: activeMenuItem, color: newColor}))
    //     socket.emit('changeConfig', {color: newColor, size })
    // }

    return (<div className={styles.toolboxContainer}>
        {<div className={styles.toolItem}>
            <h4 className={styles.toolText}>Stroke Color</h4>
            <div className={styles.itemContainer}>
                <div className={cx(styles.colorBox,)} style={{ backgroundColor: COLORS.BLACK }} />
                <div className={cx(styles.colorBox,)} style={{ backgroundColor: COLORS.RED }} />
                <div className={cx(styles.colorBox,)} style={{ backgroundColor: COLORS.GREEN }} />
                <div className={cx(styles.colorBox,)} style={{ backgroundColor: COLORS.BLUE }} />
                <div className={cx(styles.colorBox,)} style={{ backgroundColor: COLORS.ORANGE }} />
                <div className={cx(styles.colorBox,)} style={{ backgroundColor: COLORS.YELLOW }} />
            </div>
        </div>}
        {<div className={styles.toolItem}>
            <h4 className={styles.toolText}>Brush Size</h4>
            <div className={styles.itemContainer}>
                <input type="range" min={1} max={10} step={1} />
            </div>
        </div>}
    </div>)
}

export default Toolbox;