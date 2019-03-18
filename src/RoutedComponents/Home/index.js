import React from 'react';
import { Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Grid, Segment, Header, Image, Button } from 'semantic-ui-react';
import coffeeImage from './coffee_beans.jpg';

const Home = props => {
  console.log('props');
  console.log(props);
  const {
    persistentHomeForm,
    impersistentHomeForm,
    updatePersistentForm,
    updateImpersistentForm,
    resetPersistentForm
  } = props;
  return (
    <div>
      <Segment>
        <Header as="h1">React PWA</Header>
      </Segment>

      <Grid divided stackable stretched columns={'equal'}>
        <Grid.Column>
          <Segment inverted={persistentHomeForm.inverted}>
            <Grid centered divided columns={'equal'}>
              <Grid.Row>
                <Header inverted={persistentHomeForm.inverted} as="h2">
                  Persistent State
                </Header>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={5}>
                  <Header inverted={persistentHomeForm.inverted} as="h4">
                    Save form entries
                  </Header>
                </Grid.Column>
                <Grid.Column width={11}>
                  <Input
                    fluid
                    placeholder="Type here and refresh, your changes will be saved"
                    value={persistentHomeForm.savableForm}
                    onChange={ev =>
                      updatePersistentForm('savableForm', ev.target.value)
                    }
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={5}>
                  <Header inverted={persistentHomeForm.inverted} as="h4">
                    Save app state
                  </Header>
                </Grid.Column>
                <Grid.Column width={11}>
                  <Button
                    onClick={() =>
                        updatePersistentForm(
                            'inverted',
                            !persistentHomeForm.inverted
                            )
                        }
                    inverted={persistentHomeForm.inverted}
                    color={persistentHomeForm.inverted ? 'yellow' : null}
                  >
                    Toggle Lights
                  </Button>
                </Grid.Column>
              </Grid.Row>
                        <Grid.Row />
                        <Grid.Row />
              <Grid.Row>
                <Grid.Column width={5}>
                  <Header inverted={persistentHomeForm.inverted} as="h4">
                    Reset state
                  </Header>
                </Grid.Column>
                <Grid.Column width={11}>
                  <Button
                    onClick={resetPersistentForm}
                    inverted={persistentHomeForm.inverted}
                    color={persistentHomeForm.inverted ? 'yellow' : null}
                  >
                    Reset
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Grid centered divided columns={'equal'}>
              <Grid.Row>
                <Header as="h2">Offline first</Header>
              </Grid.Row>
              <Grid.Row>
                <Header as="h4">
                  Site remains usable even in airplane mode
                </Header>
              </Grid.Row>
              <Grid.Row>
                <Header as="h4">
                  Pages and content load, routes remain usable
                </Header>
              </Grid.Row>
              <Grid.Column width={16}>
                <Image src={coffeeImage} />
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment inverted={impersistentHomeForm.inverted}>
            <Grid centered divided columns={'equal'}>
              <Grid.Row>
                <Header inverted={impersistentHomeForm.inverted} as="h2">
                  Non-Persistent State Too
                </Header>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={5}>
                  <Header inverted={impersistentHomeForm.inverted} as="h4">
                    Don't save forms
                  </Header>
                </Grid.Column>
                <Grid.Column width={11}>
                  <Input
                    fluid
                    placeholder="Type here and refresh, your changes will reset"
                    value={impersistentHomeForm.savableForm}
                    onChange={ev =>
                      updateImpersistentForm('savableForm', ev.target.value)
                    }
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={5}>
                  <Header inverted={impersistentHomeForm.inverted} as="h4">
                    Dont save app states
                  </Header>
                </Grid.Column>
                <Grid.Column width={11}>
                  <Button
                    onClick={() =>
                      updateImpersistentForm(
                        'inverted',
                        !impersistentHomeForm.inverted
                      )
                    }
                    inverted={impersistentHomeForm.inverted}
                    color={impersistentHomeForm.inverted ? 'yellow' : null}
                  >
                    Toggle Lights
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Grid.Column>
      </Grid>
      <Segment>
        <Header as="h1">Responsive as heck</Header>
      </Segment>
    </div>
  );
};

const mapStateToProps = ({
  persistentHomeFormReducer,
  impersistentHomeFormReducer
}) => ({
  persistentHomeForm: persistentHomeFormReducer,
  impersistentHomeForm: impersistentHomeFormReducer
});

function mapDispatchToProps(dispatch) {
  return {
    updatePersistentForm: (key, value) => {
      return dispatch({
        type: 'PERSISTENT_HOME_FORM_CHANGED',
        payload: { [key]: value }
      });
    },
    updateImpersistentForm: (key, value) => {
      return dispatch({
        type: 'IMPERSISTENT_HOME_FORM_CHANGED',
        payload: { [key]: value }
      });
    },
    resetPersistentForm: (key, value) => {
      return dispatch({
        type: 'PERSISTENT_HOME_FORM_RESET'
      });
    }
  };
}
const Connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export { Connected as Home };
