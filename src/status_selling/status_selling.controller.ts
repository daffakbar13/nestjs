import { Body, Controller, Delete, Get, Post, Put, Query } from "@nestjs/common";
import { StatusSellingService } from "./status_selling.service";

@Controller('status_selling')

export class StatusSellingController {
    constructor(
        private statusSellingsService: StatusSellingService
    ) { }
    @Get()
    findAll() {
        return this.statusSellingsService.getStatusSellings()
    }

    @Get('id')
    findById(@Query() query) {
        return this.statusSellingsService.getStatusSellingsByField('id', query.id)
    }

    @Post()
    insertOne(@Body() body): any {
        return this.statusSellingsService.insertStatusSelling({
            n_status: body.status,
        })
    }

    @Put()
    async updateOne(@Body() body) {
        await this.statusSellingsService.updateStatusSelling(
            body.id,
            {
                n_status: body.status,
            })
    }

    @Delete()
    async deleteOne(@Body() body) {
        await this.statusSellingsService.deleteStatusSelling('id', body.id)
    }
}