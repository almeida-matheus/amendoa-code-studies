import React from 'react'
import PropTypes from 'prop-types'
import Svg, { Path } from 'react-native-svg'

const Icon = ({ height, width, color, icon }) => {
    switch (icon) {
        case 'close':
            return (
                <Svg width={width} height={height} viewBox="0 0 47.971 47.971">
                    <Path
                        fill={color}
                        d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
            c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
            C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
            s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"
                    />
                </Svg>
            )
        case 'user':
            return (
                <Svg width={width} height={height} viewBox="0 0 24 24">
                    <Path
                        fill={color}
                        d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                    />
                </Svg>
            )
    }
}

Icon.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default Icon
