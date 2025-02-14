import React, { FunctionComponent } from 'react'
import { observer } from 'mobx-react'
import Box from '@mui/material/Box'
import Input from '@mui/material/Input'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ButtonGroup from '@mui/material/ButtonGroup'

import { useStyle } from 'src/store/hooks'
import GridInput from 'src/app/components/GridInput'

import FormFill from 'src/app/layout/common/FormFill'

const Stroke: FunctionComponent = () => {
  const { stroke, useStroke, setUseStroke } = useStyle()
  const {
    setWidth,
    lineJoin,
    setLineJoin,
    lineCap,
    setLineCap,
    strokeType,
    setStrokeType,
  } = stroke

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
        <Typography
          component='div'
          sx={{
            flex: 1,
          }}
        >
          Stroke
        </Typography>
        Off
        <Switch
          size='small'
          checked={useStroke}
          onChange={(e) => setUseStroke(e.target.checked)}
        />
        On
      </Box>
      <Box
        sx={
          useStroke
            ? {}
            : {
                opacity: 0.3,
                pointerEvents: 'none',
              }
        }
      >
        <Box sx={{ px: 2, my: 4 }}>
          <GridInput before='Width:' after='px'>
            <Input
              value={stroke?.width || 0}
              fullWidth
              type='number'
              inputProps={{ min: 0 }}
              onChange={(e) => setWidth(Number(e.target.value))}
            />
          </GridInput>
        </Box>

        <Box sx={{ px: 2, my: 4 }}>
          <GridInput before='Type:' component='div' childrenWidth={8}>
            <ButtonGroup size='small' color='primary'>
              <Button
                onClick={() => setStrokeType(0)}
                variant={strokeType === 0 ? 'contained' : 'outlined'}
              >
                Outer
              </Button>
              <Button
                onClick={() => setStrokeType(1)}
                variant={strokeType === 1 ? 'contained' : 'outlined'}
              >
                Middle
              </Button>
              <Button
                onClick={() => setStrokeType(2)}
                variant={strokeType === 2 ? 'contained' : 'outlined'}
              >
                Inner
              </Button>
            </ButtonGroup>
          </GridInput>
        </Box>

        <Box sx={{ px: 2, my: 4 }}>
          <GridInput before='Line Cap:' component='div' childrenWidth={8}>
            <ButtonGroup size='small' color='primary'>
              <Button
                onClick={() => setLineCap('butt')}
                variant={lineCap === 'butt' ? 'contained' : 'outlined'}
              >
                Butt
              </Button>
              <Button
                onClick={() => setLineCap('round')}
                variant={lineCap === 'round' ? 'contained' : 'outlined'}
              >
                Round
              </Button>
              <Button
                onClick={() => setLineCap('square')}
                variant={lineCap === 'square' ? 'contained' : 'outlined'}
              >
                Square
              </Button>
            </ButtonGroup>
          </GridInput>
        </Box>

        <Box sx={{ px: 2, my: 4 }}>
          <GridInput before='Line Join:' component='div' childrenWidth={8}>
            <ButtonGroup size='small' color='primary'>
              <Button
                onClick={() => setLineJoin('miter')}
                variant={lineJoin === 'miter' ? 'contained' : 'outlined'}
              >
                Miter
              </Button>
              <Button
                onClick={() => setLineJoin('round')}
                variant={lineJoin === 'round' ? 'contained' : 'outlined'}
              >
                Round
              </Button>
              <Button
                onClick={() => setLineJoin('bevel')}
                variant={lineJoin === 'bevel' ? 'contained' : 'outlined'}
              >
                Bevel
              </Button>
            </ButtonGroup>
          </GridInput>
        </Box>
        <FormFill config={stroke} />
      </Box>
    </>
  )
}

export default observer(Stroke)
