import { StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import {Controller, useForm, useWatch} from "react-hook-form";

type FormValues = {
  email: string;
};

export default function TabOneScreen() {
  const {
    control,
  } = useForm<FormValues>();

  const emailWatch = useWatch({
    control,
    name: 'email',
  });

  return (
    <View style={styles.container}>
      <Controller control={control} name={'email'} render={() => <View/>} />
      <Controller control={control} name={'password'} render={() => <View/>} />
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
