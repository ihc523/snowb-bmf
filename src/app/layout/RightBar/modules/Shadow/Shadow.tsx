import React, { FunctionComponent } from 'react'
import { observer } from 'mobx-react'
import Box from '@mui/material/Box'
import Input from '@mui/material/Input'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'

import { useStyle } from 'src/store/hooks'
import GridInput from 'src/app/components/GridInput'
import FormColor from '../../../common/FormColor'

const Shadow: FunctionComponent<unknown> = () => {
  const { shadow, useShadow, setUseShadow } = useStyle()
  const { setOffsetX, setOffsetY, setBlur, setColor } = shadow

  return (
    <>
      <Box
        component='label'
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: 2,
          my: 4,
        }}
      >
        <Typography component='div' sx={{ flex: 1 }}>
          Shadow
        </Typography>
        Off
        <Switch
          size='small'
          checked={useShadow}
          onChange={(e) => setUseShadow(e.target.checked)}
        />
        On
      </Box>
      <Box
        sx={
          useShadow
            ? {}
            : {
                opacity: 0.3,
                pointerEvents: 'none',
              }
        }
      >
        <Box sx={{ px: 2, my: 4 }}>
          <GridInput before='Offset X:' after='px'>
            <Input
              value={shadow?.offsetX || 0}
              fullWidth
              type='number'
              disabled={!useShadow}
              onChange={(e) => setOffsetX(Number(e.target.value))}
            />
          </GridInput>
        </Box>
        <Box sx={{ px: 2, my: 4 }}>
          <GridInput before='Offset Y:' after='px'>
            <Input
              value={shadow?.offsetY || 0}
              fullWidth
              type='number'
              disabled={!useShadow}
              onChange={(e) => setOffsetY(Number(e.target.value))}
            />
          </GridInput>
        </Box>
        <Box sx={{ px: 2, my: 4 }}>
          <GridInput before='Blur:' after='px'>
            <Input
              value={shadow?.blur || 0}
              fullWidth
              type='number'
              disabled={!useShadow}
              inputProps={{ style: { textAlign: 'right' }, min: 0 }}
              onChange={(e) => setBlur(Number(e.target.value))}
            />
          </GridInput>
        </Box>
        <Box sx={{ px: 2, my: 4 }}>
          <FormColor color={shadow?.color || ''} onChange={setColor} />
        </Box>
      </Box>
    </>
  )
}
export default observer(Shadow)
