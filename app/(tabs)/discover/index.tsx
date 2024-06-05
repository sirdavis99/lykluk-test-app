import { BaseView, Row, ViewContainer } from '@components/views';
import { RegularText } from 'components/text';

export default function Page() {
    return (
        <BaseView>
            <Row
                flexGrow={1}
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
            >
                <ViewContainer>
                    <RegularText>Discover</RegularText>
                </ViewContainer>
            </Row>
        </BaseView>
    )
}
