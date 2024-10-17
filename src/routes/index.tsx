import { component$, useContext, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PillButtonWithIcon } from '~/components/router-head/bill-button-with-icon';
import { CardComponent } from '~/components/router-head/CardComponent';
import { DropDownMenu } from '~/components/router-head/DropdownMenu';
import { EFightingComponent } from '~/components/router-head/TitleCard';
import { ThemeContext } from '~/store/my-context';

export default component$(() => {
  const { theme, betCount } = useContext(ThemeContext);
  return (
    <>
      <div class="flex-1 w-full h-full flex p-4 relative box-border min-h-[calc(100vh-96px)] flex-col">
        <EFightingComponent />

        <div class="flex flex-wrap gap-2 items-center">
          <DropDownMenu />

          <PillButtonWithIcon text="Valhalla Cup 2024 Week #40">
            <img
              src="https://files-immutable-4cbc033nbd3.sptpub.com/flags_by_code/international.svg"
              alt="Flag"
              height="24"
              width="24"
              class="bt276"
            />
          </PillButtonWithIcon>

          <PillButtonWithIcon
            text="Popular"
            hasImage={false}
          ></PillButtonWithIcon>

          <PillButtonWithIcon text="Valhalla Cup 2024 Week #40">
            <img
              src="https://files-immutable-4cbc033nbd3.sptpub.com/flags_by_code/international.svg"
              alt="Flag"
              height="24"
              width="24"
              class="bt276"
            />
          </PillButtonWithIcon>
        </div>

        <div class="grid grid-cols-1  lg:grid-cols-4 mt-4 gap-4">
          <CardComponent
            title="Injustice 2"
            status="Started"
            score={1}
            eventImageUrl="https://d1bvoel1nv172p.cloudfront.net/blurred_images/medium/2376409257651351552.png"
            odds={[
              {
                name: 'Winner',
                odds: [
                  { teamName: '1', number: 1.3 },
                  { teamName: '2', number: 3.45 },
                ],
              },
              {
                name: 'First damage',
                odds: [
                  { teamName: 'Aquaman', number: 1.22 },
                  { teamName: 'Gorilla Grodd', number: 3.7 },
                ],
              },
              {
                name: 'First health bar winner',
                odds: [
                  { teamName: 'Aquaman', number: 1.35 },
                  { teamName: 'Gorilla Grodd', number: 2.93 },
                ],
              },
              {
                name: 'Total of clash',
                odds: [
                  { teamName: 'over 0.5', number: 1.17 },
                  { teamName: 'under 0.5', number: 4.4 },
                  { teamName: 'over 1.5', number: 3.8 },
                  { teamName: 'under 1.5', number: 1.22 },
                ],
              },
            ]}
          />
          <CardComponent
            title="Injustice 2"
            status="Started"
            score={1}
            eventImageUrl="https://d1bvoel1nv172p.cloudfront.net/blurred_images/medium/2376409257651351552.png"
            odds={[
              {
                name: 'Winner',
                odds: [
                  { teamName: '1', number: 1.3 },
                  { teamName: '2', number: 3.45 },
                ],
              },
              {
                name: 'First damage',
                odds: [
                  { teamName: 'Aquaman', number: 1.22 },
                  { teamName: 'Gorilla Grodd', number: 3.7 },
                ],
              },
              {
                name: 'First health bar winner',
                odds: [
                  { teamName: 'Aquaman', number: 1.35 },
                  { teamName: 'Gorilla Grodd', number: 2.93 },
                ],
              },
              {
                name: 'Total of clash',
                odds: [
                  { teamName: 'over 0.5', number: 1.17 },
                  { teamName: 'under 0.5', number: 4.4 },
                  { teamName: 'over 1.5', number: 3.8 },
                  { teamName: 'under 1.5', number: 1.22 },
                ],
              },
            ]}
          />
          <CardComponent
            title="Injustice 2"
            status="Started"
            score={1}
            eventImageUrl="https://d1bvoel1nv172p.cloudfront.net/blurred_images/medium/2376409257651351552.png"
            odds={[
              {
                name: 'Winner',
                odds: [
                  { teamName: '1', number: 1.3 },
                  { teamName: '2', number: 3.45 },
                ],
              },
              {
                name: 'First damage',
                odds: [
                  { teamName: 'Aquaman', number: 1.22 },
                  { teamName: 'Gorilla Grodd', number: 3.7 },
                ],
              },
              {
                name: 'First health bar winner',
                odds: [
                  { teamName: 'Aquaman', number: 1.35 },
                  { teamName: 'Gorilla Grodd', number: 2.93 },
                ],
              },
              {
                name: 'Total of clash',
                odds: [
                  { teamName: 'over 0.5', number: 1.17 },
                  { teamName: 'under 0.5', number: 4.4 },
                  { teamName: 'over 1.5', number: 3.8 },
                  { teamName: 'under 1.5', number: 1.22 },
                ],
              },
            ]}
          />
          <CardComponent
            title="Injustice 2"
            status="Started"
            score={1}
            eventImageUrl="https://d1bvoel1nv172p.cloudfront.net/blurred_images/medium/2376409257651351552.png"
            odds={[
              {
                name: 'Winner',
                odds: [
                  { teamName: '1', number: 1.3 },
                  { teamName: '2', number: 3.45 },
                ],
              },
              {
                name: 'First damage',
                odds: [
                  { teamName: 'Aquaman', number: 1.22 },
                  { teamName: 'Gorilla Grodd', number: 3.7 },
                ],
              },
              {
                name: 'First health bar winner',
                odds: [
                  { teamName: 'Aquaman', number: 1.35 },
                  { teamName: 'Gorilla Grodd', number: 2.93 },
                ],
              },
              {
                name: 'Total of clash',
                odds: [
                  { teamName: 'over 0.5', number: 1.17 },
                  { teamName: 'under 0.5', number: 4.4 },
                  { teamName: 'over 1.5', number: 3.8 },
                  { teamName: 'under 1.5', number: 1.22 },
                ],
              },
            ]}
          />
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
