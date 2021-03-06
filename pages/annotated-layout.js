import {
    Button,
    Card,
    Form,
    FormLayout,
    Layout,
    Page,
    SettingToggle,
    Stack,
    TextField,
    TextStyle,
  } from '@shopify/polaris';
  import store from 'store-js';

  
  class AnnotatedLayout extends React.Component {
    state = {
      startRange: "0",
      endRange: "1",
      enabled: false,
    };
  
    render() {
      const { startRange, endRange, enabled } = this.state;
      const contentStatus = enabled ? 'Disable' : 'Enable';
      const textStatus = enabled ? 'enabled' : 'disabled';

      const startRangeInt = this.state.startRange
      const endRangeInt = this.state.endRange
      store.set('startRangeInt', startRangeInt)
      store.set('endRangeInt', endRangeInt)
  
      return (
        <Page>
          <Layout>
            <Layout.AnnotatedSection
              title="Range of Orders"
              description="Select range of orders to convert notes into word doc form"
            >
              <Card sectioned>
                <Form onSubmit={this.handleSubmit}>
                  <FormLayout>
                    <TextField
                      value={startRange}
                      onChange={this.handleChange('startRange')}
                      label="Starting Order (If 0 is given => ie: Starting Order: 0, Orders to search and make: 1 => will make orders 0,1. Otherwise, Starting Order: 1, Orders to search and make: 3 => will make orders 2,3,4)"
                      type="startRange"
                    />
                    <TextField
                      value={endRange}
                      onChange={this.handleChange('endRange')}
                      label="Orders to search and make"
                      type="endRange"
                    />
                    <Stack distribution="trailing">
                      <Button primary submit>
                        Enter
                      </Button>
                    </Stack>
                  </FormLayout>
                </Form>
              </Card>
            </Layout.AnnotatedSection>
          </Layout>
        </Page>
      );
    }
  
    handleSubmit = () => {
      this.setState({
        startRange: this.state.startRange,
        endRange: this.state.endRange,
      });
      const startRangeInt = this.state.startRange
      const endRangeInt = this.state.endRange
      store.set('startRangeInt', startRangeInt)
      store.set('endRangeInt', endRangeInt)

      console.log('start range', startRangeInt)
      console.log('end range', endRangeInt)
    };
  
    handleChange = (field) => {
      return (value) => this.setState({ [field]: value });
    };
  }
  
  export default AnnotatedLayout;