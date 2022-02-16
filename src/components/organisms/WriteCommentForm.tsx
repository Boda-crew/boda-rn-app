import React, { useState } from 'react';
import { AButton, AView, AViewProps } from '../atoms';
import { KeyboardTextInput } from '../molecules';

interface Props extends AViewProps {
  title: string;
  loading?: boolean;
  onSubmit: (text: string) => void;
}

export const WriteCommentForm = ({ title, loading, onSubmit, ...props }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <AView {...props}>
      <AButton
        size="large"
        title={title}
        loading={loading}
        onPress={() => setOpen(true)}
      />
      <KeyboardTextInput
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={onSubmit}
      />
    </AView>
  );
};
