import { Alert, Button, Col, Container, Grid, Icon, Panel, Row } from 'rsuite';
import { auth, database } from '../misc/firebase';
import firebase from 'firebase/app';

export const SignIn = () => {
  const signInWithProvider = async provider => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }

      Alert.success('Signrd in', 4000);
    } catch (error) {
      Alert.error(error.message, 4000);
    }
  };
  const signInWithFacebook = () => {
    signInWithProvider(new firebase.auth.FacebookAuthProvider());
  };
  const signInWithGoogle = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };
  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div>
                <h2>WELCOMEE TO CHAT</h2>
                <p>Progressive Chat platform newphy</p>
              </div>
              <div className="mt-3">
                <Button block color="blue" onClick={signInWithFacebook}>
                  <Icon icon="facebook">Continue With Facebook</Icon>
                </Button>
                <Button block color="green" onClick={signInWithGoogle}>
                  <Icon icon="google">Continue With Google</Icon>
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};
