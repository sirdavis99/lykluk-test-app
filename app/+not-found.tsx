import { StyleSheet } from 'react-native';

import { BaseView } from '@/components/views';
import React from 'react';

export default function NotFoundScreen() {
  return (
    <BaseView>
      
    </BaseView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
