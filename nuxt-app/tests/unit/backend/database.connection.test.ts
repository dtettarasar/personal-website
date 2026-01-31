import { describe, it, expect, vi, beforeEach } from 'vitest'
import mongoose from 'mongoose'
import { initDB, _resetForTesting } from '../../../server/database/database'

vi.mock('mongoose', () => ({
  default: {
    set: vi.fn(),
    connect: vi.fn(),
    disconnect: vi.fn(),
    connection: {
      readyState: 0,
    },
  },
}))

describe('Database connection (initDB)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    _resetForTesting()
  })

  it('should call mongoose.connect if disconnected', async () => {
    vi.mocked(mongoose.connect).mockResolvedValueOnce({
      connections: [{ readyState: 1 }],
    } as any)

    await initDB('mongodb://localhost/test')

    expect(mongoose.connect).toHaveBeenCalledWith('mongodb://localhost/test', {
      serverSelectionTimeoutMS: 30000,
    })
  })

  it('should not call connect if already connected (isConnected true)', async () => {
    vi.mocked(mongoose.connect).mockResolvedValueOnce({
      connections: [{ readyState: 1 }],
    } as any)

    await initDB('mongodb://localhost/test')
    expect(mongoose.connect).toHaveBeenCalledTimes(1)

    await initDB('mongodb://localhost/test')
    expect(mongoose.connect).toHaveBeenCalledTimes(1)
  })

  it('should throw error on failure', async () => {
    vi.mocked(mongoose.connect).mockRejectedValueOnce(new Error('Failed'))

    await expect(initDB('mongodb://localhost/test')).rejects.toThrow('Failed')
  })
})
