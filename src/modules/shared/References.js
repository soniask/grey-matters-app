import React from 'react';
import {
    Text,
    View,
} from 'react-native';

import styles from './ReferencesStyles';

const References = (props) => (
    <View>
        <View style={styles.referenceBox}>
        <Text style={styles.referenceHeader}>References</Text>
        </View>
        <Text style={styles.references}>{props.references}</Text>
    </View>
)

export default References;