import React, { useEffect, useState } from 'react'
import { Dropdown, Button, InputGroup, FormControl } from 'react-bootstrap'
import Viewer from '../../Layout/Viewer'
import * as Style from './style'
import './index.css'

export default function TimeEntry({ setLoad }) {

    const [sel, setSel] = useState(false);

    const [showFiltros, setShowFiltros] = useState(true);
    const [showApontamento, setShowApontamento] = useState(false);

    const [dados, setDados] = useState(
        [
            {
                projeto: "A",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "B",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "C ",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "D",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "E",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "F",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "G",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "H",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "I",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "J",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "BK",
                obs: "fdfdff",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "L",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "A",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "B",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "C ",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "D",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "E",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "F",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "G",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "H",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "I",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "J",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "BK",
                obs: "fdfdff",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "L",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "A",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "B",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "C ",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "D",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "E",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "F",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "G",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "H",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "I",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "J",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "BK",
                obs: "fdfdff",
                data: "0101/2020",
                horas: "00:00"
            },
            {
                projeto: "L",
                obs: "fdfdfdf",
                data: "0101/2020",
                horas: "00:00"
            },
        ]
    );

    useEffect(() => {
        setLoad(true);
        setLoad(false);
    }, []);

    return (
        <>
            <Viewer>
                {showFiltros ?
                    <Style.Container selected={showFiltros}>
                        <Style.Filtros>
                            <Style.FHeader>Filtros</Style.FHeader>
                            <Style.FBody>
                                <Style.FBoxBody>
                                    <Style.Box>
                                        <Style.BoxHeader>
                                            Time
                                        </Style.BoxHeader>
                                        <Dropdown>
                                            <Dropdown.Toggle className="drop-down">
                                                {
                                                    sel ? sel : "Select"
                                                }
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="drop-down-menu">
                                                <Dropdown.Item onClick={() => { setSel("1") }}>Action</Dropdown.Item>
                                                <Dropdown.Item onClick={() => { setSel("2") }}>Another action</Dropdown.Item>
                                                <Dropdown.Item onClick={() => { setSel("3") }}>Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Style.Box>
                                    <Style.Box>
                                        <Style.BoxHeader>
                                            Centro de Custo
                                        </Style.BoxHeader>
                                        <Dropdown>
                                            <Dropdown.Toggle className="drop-down">
                                                {
                                                    sel ? sel : "Select"
                                                }
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="drop-down-menu">
                                                <Dropdown.Item onClick={() => { setSel("1") }}>Action</Dropdown.Item>
                                                <Dropdown.Item onClick={() => { setSel("2") }}>Another action</Dropdown.Item>
                                                <Dropdown.Item onClick={() => { setSel("3") }}>Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Style.Box>
                                    <Style.Box>
                                        <Style.BoxHeader>
                                            Projeto
                                        </Style.BoxHeader>
                                        <Dropdown>
                                            <Dropdown.Toggle className="drop-down">
                                                {
                                                    sel ? sel : "Select"
                                                }
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="drop-down-menu">
                                                <Dropdown.Item onClick={() => { setSel("1") }}>Action</Dropdown.Item>
                                                <Dropdown.Item onClick={() => { setSel("2") }}>Another action</Dropdown.Item>
                                                <Dropdown.Item onClick={() => { setSel("3") }}>Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Style.Box>
                                </Style.FBoxBody>
                            </Style.FBody>
                            <Style.FFooter>
                                <Button className="but">Filtrar</Button>
                            </Style.FFooter>
                        </Style.Filtros>
                        <Style.Apontamento>
                            <Style.AHeader>Apontamentos</Style.AHeader>
                            <Style.Table>
                                <Style.THeader>
                                    <Style.TRHeader>
                                        <Style.Th>Projeto</Style.Th>
                                        <Style.Th>Observações</Style.Th>
                                        <Style.Th>Data</Style.Th>
                                        <Style.Th>Horas</Style.Th>
                                        <Style.THSmall>Ações</Style.THSmall>
                                    </Style.TRHeader>
                                </Style.THeader>
                                <Style.TData>
                                    {
                                        dados.map((data, i) => {
                                            return (
                                                <Style.Tr>
                                                    <Style.Td key={i}>{data.projeto}</Style.Td>
                                                    <Style.Td key={i}>{data.obs}</Style.Td>
                                                    <Style.Td key={i}>{data.data}</Style.Td>
                                                    <Style.Td key={i}>{data.horas}</Style.Td>
                                                    <Style.TDSmall>*ícones*</Style.TDSmall>
                                                </Style.Tr>
                                            )
                                        })
                                    }
                                </Style.TData>
                            </Style.Table>
                        </Style.Apontamento>
                    </Style.Container>
                    :
                    <Style.Container>
                        <Style.Dados>
                            <Style.DHeader>Novo Apontamento</Style.DHeader>
                            <Style.DBody>
                                <Style.DBoxBody>
                                    <Style.DBigBox>
                                        <Style.BoxHeader>
                                            Projeto
                                    </Style.BoxHeader>
                                        <Dropdown>
                                            <Dropdown.Toggle className="drop-down">
                                                {
                                                    sel ? sel : "Select"
                                                }
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="drop-down-menu">
                                                <Dropdown.Item onClick={() => { setSel("1") }}>Action</Dropdown.Item>
                                                <Dropdown.Item onClick={() => { setSel("2") }}>Another action</Dropdown.Item>
                                                <Dropdown.Item onClick={() => { setSel("3") }}>Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Style.DBigBox>
                                </Style.DBoxBody>
                                <Style.DBoxBody>
                                    <Style.DBox>
                                        <Style.BoxHeader>
                                            Data
                                    </Style.BoxHeader>
                                        <InputGroup className="text-box">
                                            <FormControl
                                                id="log"
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                type="text"
                                            />
                                        </InputGroup>
                                    </Style.DBox>
                                    <Style.DSmallBox>
                                        <Style.BoxHeader>
                                            Horas
                                    </Style.BoxHeader>
                                        <InputGroup className="text-box">
                                            <FormControl
                                                id="log"
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                type="text"
                                            />
                                        </InputGroup>
                                    </Style.DSmallBox>
                                    <Style.DSmallBox>
                                        <Style.BoxHeader>
                                            Minutos
                                    </Style.BoxHeader>
                                        <InputGroup className="text-box">
                                            <FormControl
                                                id="log"
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                type="text"
                                            />
                                        </InputGroup>
                                    </Style.DSmallBox>
                                    <Style.DBox>
                                        <Style.BoxHeader>
                                            Gerente do Projeto
                                    </Style.BoxHeader>
                                        <InputGroup className="text-box">
                                            <FormControl
                                                id="log"
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                type="text"
                                            />
                                        </InputGroup>
                                    </Style.DBox>
                                </Style.DBoxBody>
                                <Style.DBoxBody>
                                    <Style.DBigBox>
                                        <Style.BoxHeader>
                                            Observações
                                    </Style.BoxHeader>
                                        <InputGroup className="text-box">
                                            <FormControl
                                                id="log"
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                type="text"
                                            />
                                        </InputGroup>
                                    </Style.DBigBox>
                                </Style.DBoxBody>
                            </Style.DBody>
                            <Style.DFooter>
                                <Button className="but">Gravar</Button>
                            </Style.DFooter>
                        </Style.Dados>
                    </Style.Container>
                }
            </Viewer>
        </>
    );
}
