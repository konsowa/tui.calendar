import { FunctionComponent, h } from 'preact';

import { Story } from '@storybook/preact';

import { Layout } from '@src/components/layout';
import { Button } from '@src/components/ui/button';
import { Main } from '@src/components/view/main';
import { useDispatch } from '@src/contexts/calendarStore';
import { cls } from '@src/helpers/css';

import { ProviderWrapper } from '@stories/util/providerWrapper';
import { createRandomEventModelsForMonth } from '@stories/util/randomEvents';

export default { title: 'Views/Main', component: Main };

const style = {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 5,
  top: 5,
};

const Wrapper: FunctionComponent = ({ children }) => (
  <div className={cls('layout')} style={style}>
    {children}
  </div>
);

const events = createRandomEventModelsForMonth();

const Toolbar = () => {
  const { changeView } = useDispatch('view');

  return (
    <div>
      <Button onClick={() => changeView('month')}>Month</Button>
      <Button onClick={() => changeView('week')}>Week</Button>
      <Button onClick={() => changeView('day')}>Day</Button>
    </div>
  );
};

const Template: Story = (args) => (
  <ProviderWrapper options={args.options} events={args.events}>
    <Wrapper>
      <Toolbar />
      <Layout>
        <Main />
      </Layout>
    </Wrapper>
  </ProviderWrapper>
);

export const Default = Template.bind({});
Default.args = {
  events,
};
