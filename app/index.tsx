import { BaseSafeView, Row, ViewContainer } from '@/components/views';
import { PrimaryButton } from '@/components/button';
import React from 'react';

export default function Page() {
  return (
    <BaseSafeView>
        <ViewContainer>
            <Row alignItems='center' justifyContent='center'>
                <PrimaryButton
                    text='View Page'
                />
            </Row>
        </ViewContainer>
    </BaseSafeView>
  );
}
