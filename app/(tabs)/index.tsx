import { StyleSheet } from 'react-native';
import DropDownPicker, {
} from 'react-native-dropdown-picker';

import { View } from '../../components/Themed';
import {useState} from "react";

export default function TabOneScreen() {
  const defaultItems = [
    { label: 'Australia', value: 'au' },
    { label: 'Indonesia', value: 'id' },
    { label: 'New Zealand', value: 'nz' },
  ];

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string[]>([]);
  const [items, setItems] = useState(defaultItems);

  return (
    <View style={styles.container}>
      <DropDownPicker
        schema={{
          label: 'label',
          value: 'value',
        }}
        mode="BADGE"
        listMode={'MODAL'}
        value={value}
        items={items}
        setItems={setItems}
        open={open}
        setOpen={setOpen}
        setValue={(cb) => {
          const newValue = cb(value);
          setValue(newValue);
        }}
        multiple
        searchable
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
