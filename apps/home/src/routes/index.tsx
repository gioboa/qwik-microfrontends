import { component$ } from '@builder.io/qwik';
import { Button } from '@qwik-microfrontends/ui';
export default component$(() => {
  return (
    <div>
      <a href="/home/test">testtttt</a>
      <Button text="I'm the home" onClick$={() => console.log('click!!')} />
    </div>
  );
});
