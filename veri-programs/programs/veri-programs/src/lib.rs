use anchor_lang::prelude::*;

declare_id!("Fma32SJqQ9javGPKM8Ce2VdLuFvBRzCmSnR9edC9FwHX");

#[program]
pub mod veri_programs {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
