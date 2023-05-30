import { component$ } from '@builder.io/qwik';
import { Button } from '@qwik-microfrontends/ui';
import { remotes } from '../../../../shared/remotes';
import RemoteMfe from '../components/remote-mfe/remote-mfe';

export default component$(() => {
  return (
    <div>
      <Button text="I'm the Host" onClick$={() => console.log('host!!')} />
      <RemoteMfe remote={remotes.home} removeLoader={true} />
    </div>
  );
});
