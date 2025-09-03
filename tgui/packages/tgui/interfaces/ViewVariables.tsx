import {
  Box,
  Button,
  Icon,
  LabeledList,
  NoticeBox,
  Section,
  Stack,
} from 'tgui-core/components';
import type { BooleanLike } from 'tgui-core/react';

import { useBackend } from '../backend';
import { Window } from '../layouts';

type VarData = {
  name: string;
  value: string;
};

type Data = {
  target_ref: string;
  icon: string;
  vars: VarData[];
};

export const ViewVariables = (props) => {
  const { data } = useBackend<Data>();

  const vars = data.vars;

  return (
    <Window width={400} height={600}>
      <Window.Content>
        {data.icon && <img src={data.icon} />}
        <img src={data.icon} />
        {vars.map((v) => (
          <Box key={v.name}>
            {v.name} = {v.value}
          </Box>
        ))}
      </Window.Content>
    </Window>
  );
};
